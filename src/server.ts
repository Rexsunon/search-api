import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandler from "./middleware/errorHandlers";
import routes from "./services";

// Handeling uncaught exceptions and exit node instance
process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(1);
});

// Handeling promise rejections and exit node instance
process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});

// Initialize express router
const router = express();

// Inject middlewares
applyMiddleware(middleware, router);

// Inject routes
applyRoutes(routes, router);

// Inject error handlers middleware
applyMiddleware(errorHandler, router);

const { PORT = 5000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}`)
);
