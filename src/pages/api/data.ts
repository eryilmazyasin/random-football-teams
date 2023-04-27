// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "<src>/data/teams.json";
import ILeague from "<src>/interfaces/ILeague";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILeague[]>
) {
  res.status(200).json(data);
}
