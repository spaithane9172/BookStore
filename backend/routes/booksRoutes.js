import express from "express";
import { Book } from "../model/bookModel.js";
const router = express.Router();

router.get("/news/", async (req, res) => {
  const { category = "general", page = 1, pageSize = 10 } = req.query;
  console.log("object");
  const apiKey = process.env.NEWS_API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.auther ||
      !request.body.publishYear ||
      !request.body.aboutTheBook
    ) {
      return response.status(201).send({
        message: "Send all required fields: title, auther, publishYear",
      });
    }
    const newBook = {
      title: request.body.title,
      auther: request.body.auther,
      publishYear: request.body.publishYear,
      aboutTheBook: request.body.aboutTheBook,
    };
    const book = await Book.create(newBook);
    return response.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).send({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.put("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.auther ||
      !request.body.publishYear ||
      !request.body.aboutTheBook
    ) {
      return response.status(201).send({
        message: "Send all required fields: title, auther, publishYear",
      });
    }
    const result = await Book.findByIdAndUpdate(request.body._id, {
      title: request.body.title,
      auther: request.body.auther,
      publishYear: request.body.publishYear,
      aboutTheBook: request.body.aboutTheBook,
    });
    if (!result) {
      return response.status(404).send({ message: "Book not found." });
    }
    return response.status(200).send({ message: "Book updated successfully." });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).send({ message: "Book not found." });
    }
    return response.status(200).send({ message: "Book deleted succefully." });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;
