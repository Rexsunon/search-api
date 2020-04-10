import { Request, Response } from "express";

export default [
  {
    path: "/",
    method: "GET",
    handler: async (req: Request, res: Response) => {
      res.send("Hellow, World");
    },
  },
];
