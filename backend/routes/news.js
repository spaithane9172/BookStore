import express from "express";
const router = express.Router();
import { REACT_APP_NEWS_API_KEY } from "../config.js";

router.get("/", async (req, res) => {
  const { category = "general", page = 1, pageSize = 10 } = req.query;
  console.log("object");
  const apiKey = process.env.REACT_APP_NEWS_API_KEY || REACT_APP_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});
export default router;
