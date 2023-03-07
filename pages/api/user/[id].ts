// WIP!!!!!!!!!!!!!!!!!!!!!!!!
// copy paste from other endpoint, not modified yet

import type { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_PORT;

async function getBreedData(breedid: string) {
  try {
    console.log(`querying: https://api.thecatapi.com/v1/breeds/${breedid}`);
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds/${breedid}`
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
  const { breedid } = req.query;
  if (typeof breedid !== "string")
    res.status(500).json({ error: "breedid<string> required" });
  else
    try {
      getBreedData(breedid).then((data) => res.status(200).json(data));
    } catch (error) {
      res.status(500).json({ error });
    }
};
