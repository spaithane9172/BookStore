import mongoose from "mongoose";

export const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    auther: { type: String, required: true },
    publishYear: { type: Number, required: true },
    aboutTheBook: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
