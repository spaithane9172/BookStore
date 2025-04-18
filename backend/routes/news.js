import express from "express";
const router = express.Router();
import { REACT_APP_NEWS_API_KEY } from "../config.js";
import dotenv from "dotenv";
dotenv.config();

router.get("/", async (req, res) => {
  const { category = "general", page = 1, pageSize = 10 } = req.query;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY || REACT_APP_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});
export default router;
