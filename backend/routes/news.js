import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/", async (req, res) => {
  const { category = "general", page = 1, pageSize = 10 } = req.query;
  const apiKey = "85967f37713f44c18381204922365bb9";
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Referer: "https://newsapi.org",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("NewsAPI Error:", data);
      return res
        .status(response.status)
        .json({ error: data.message || "NewsAPI error" });
    }

    res.json(data);
  } catch (error) {
    console.error("Fetch Failed:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

export default router;
