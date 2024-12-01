import express from "express";
import { PORT, mongoDBurl } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from "./routes/booksRoutes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/books", booksRoutes);

mongoose
  .connect(mongoDBurl)
  .then(() => {
    console.log("Connection to database successfully done.");
    app.listen(PORT, () => {
      console.log("Backend server started at port:", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
