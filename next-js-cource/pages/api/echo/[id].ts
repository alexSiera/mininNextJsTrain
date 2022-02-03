import { NextApiRequest, NextApiResponse } from "next";

interface IdNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

const getById = (req: IdNextApiRequest, res: NextApiResponse<any>) => {
  // Old method
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");
  // res.end(req.query.id);

  // New method
  res.json({ yourId: req.query.id });
};

export default getById;
