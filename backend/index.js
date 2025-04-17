import express from "express";
import { PORT, mongoDBurl } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from "./routes/booksRoutes.js";
import news from "./routes/news.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://bookstore-frontend-3umc.onrender.com",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/books", booksRoutes);
app.use("/news", news);

mongoose
  .connect(mongoDBurl)
  .then(() => {
    console.log("Connection to database successfully done.");
    app.listen(process.env.PORT || PORT, () => {
      console.log("Backend server started at port:", process.env.PORT || PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
