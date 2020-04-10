import { Router, json } from "express";
import cors from "cors";
import compression from "compression";

/**
 * Enable cors
 *
 * @param router express router
 */
export const corsHandler = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

/**
 * Body parser
 *
 * @param router express router
 */
export const bodyRequestParserHandler = (router: Router) => router.use(json());

/**
 * Handleing compression
 *
 * @param router express router
 */
export const compressionHandler = (router: Router) => router.use(compression());
