import { Router, Request, Response, NextFunction } from "express";
import { type } from "os";

type Wrapper = (router: Router) => void;

/**
 * Middleware wrapper
 *
 * @param middlewareWrappers Array of middleware
 * @param router Express router
 */
export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

type Route = { path: string; method: string; handler: Handler | Handler[] };

/**
 * Apply routes
 *
 * @param routes Array of routes
 * @param router Express router
 */
export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { path, method, handler } = route;
    (router as any)[method](path, handler);
  }
};
