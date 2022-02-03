import { NextApiRequest, NextApiResponse } from "next";

interface MessageNextApiRequest extends NextApiRequest {
  query: {
    message?: string;
  };
}

const echo = (req: MessageNextApiRequest, res: NextApiResponse<any>) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(
    JSON.stringify({
      message: req.query.message ?? "Base message",
    })
  );
};

export default echo;
