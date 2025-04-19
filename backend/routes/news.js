import express from "express";
const router = express.Router();
import { REACT_APP_NEWS_API_KEY } from "../config.js";

router.get("/", async (req, res) => {
  const { category = "general", page = 1, pageSize = 10 } = req.query;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY || REACT_APP_NEWS_API_KEY;
  const url = `https://newsdata.io/api/1/latest?apikey=pub_815081c01955d76e6bea77e4d9fb9fa37c2f1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});
export default router;
