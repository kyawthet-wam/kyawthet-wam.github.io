import Parser from "rss-parser";
import type { NextApiRequest, NextApiResponse } from "next";

const parser = new Parser();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rssUrl = "https://medium.com/feed/@kyawthetwam";
  try {
    const response = await fetch(rssUrl);
    const xml = await response.text();
    const feed = await parser.parseString(xml);
    res.status(200).json(feed.items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch RSS feed" });
  }
}
