import { Router, Request, Response, NextFunction } from "express";
import { type } from "os";

type Wrapper = (router: Router) => void;

export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};
