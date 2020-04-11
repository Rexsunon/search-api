import { Request, Response } from "express";
import { getPlacesByName } from "./SearchController";

// Search routes
export default [
  {
    path: "/api/v1/search",
    method: "GET",
    handler: [
      async ({ query }: Request, res: Response) => {
        const result = await getPlacesByName(query.q.toString());
        res.status(200).send(result);
      },
    ],
  },
];
