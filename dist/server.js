"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
const services_1 = __importDefault(require("./services"));
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
const router = express_1.default();
// Inject middlewares
utils_1.applyMiddleware(middleware_1.default, router);
// Inject routes
utils_1.applyRoutes(services_1.default, router);
// Inject error handlers middleware
utils_1.applyMiddleware(errorHandlers_1.default, router);
const { PORT = 5000 } = process.env;
const server = http_1.default.createServer(router);
server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`));
//# sourceMappingURL=server.js.map