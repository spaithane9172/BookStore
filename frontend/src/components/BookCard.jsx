import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const BookCard = ({
  book,
  setUpdateBookModal,
  setViewBookModal,
  onViewDetails,
  getBook,
  deleteBook,
}) => {
  console.log("book", book._id);
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-lg shadow-lg w-[20rem] mx-[0.5rem] my-[0.5rem]">
      <div className="bg-white rounded-lg p-4 h-[15rem] flex flex-col justify-between">
        <div>
          {/* Book Details */}
          <h2 className="text-[1.2rem] font-bold text-gray-800 mb-[0.5rem]">
            {book.title.length > 40
              ? book.title.slice(0, 40) + "..."
              : book.title}
          </h2>
          <p className="text-gray-600 mt-1 text-[0.9rem]">
            <span className="font-semibold">Author:</span> {book.auther}
          </p>
          <p className="text-gray-600 text-[0.9rem]">
            <span className="font-semibold">Published:</span> {book.publishYear}
          </p>
          <p className="text-gray-600 text-[0.9rem]">
            <span className="font-semibold">About The Book</span>
          </p>
          <p className="text-gray-600 text-[0.8rem]">
            {book.aboutTheBook.length > 40
              ? book.aboutTheBook.slice(0, 80) + "..."
              : book.aboutTheBook}
          </p>
        </div>
        {/* Buttons with Icons */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => {
              getBook(book._id);
              setViewBookModal(true);
            }}
            className="flex items-center bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600 transition"
            title="View Details"
          >
            <FaEye />
          </button>
          <button
            onClick={() => {
              getBook(book._id);
              setUpdateBookModal(true);
            }}
            className="flex items-center bg-purple-500 text-white p-2 rounded-full shadow hover:bg-purple-600 transition"
            title="Update"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => {
              deleteBook(book._id);
            }}
            className="flex items-center bg-red-500 text-white p-2 rounded-full shadow hover:bg-red-600 transition"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
