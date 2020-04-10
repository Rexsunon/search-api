import { Router, json } from "express";
import cors from "cors";
import compression from "compression";

export const corsHandler = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const bodyRequestParserHandler = (router: Router) => router.use(json());

export const compressionHandler = (router: Router) => router.use(compression());
