import { Request, Response, NextFunction } from "express";
import { HTTP404Error } from "../utils/httpErrors";

export const checkSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.q) {
    throw new HTTP404Error("Messing q parameter");
  } else {
    next();
  }
};
