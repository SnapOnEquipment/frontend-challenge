import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.THECATAPI_KEY;

async function getCatData(catid: string) {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/${catid}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const requestOptions = {
  method: "GET",
  headers: {
    "x-api-key": apiKey,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { catid } = req.query;
  if (typeof catid !== "string")
    res.status(500).json({ error: "catid<string> required" });
  else
    try {
      getCatData(catid).then((data) => res.status(200).json(data));
    } catch (error) {
      res.status(500).json({ error });
    }
};
