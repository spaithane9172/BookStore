import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import AddBookModal from "../components/AddBookModal";
import ViewBookDetails from "../components/ViewBookDetails";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({
    title: "",
    auther: "",
    publishYear: "",
  });
  const [addBookModal, setAddBookModal] = useState(false);
  const [updateBookModal, setUpdateBookModal] = useState(false);
  const [viewBookModal, setViewBookModal] = useState(false);

  const getAllBooks = async () => {
    try {
      const response = await axios.get(
        "https://bookstore-jafq.onrender.com/books"
      );
      console.log(response);
      setBooks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getBook = async (id) => {
    try {
      const response = await axios.get(
        "https://bookstore-jafq.onrender.com/books/" + id
      );
      setBook(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteBook = async (id) => {
    try {
      const response = await axios.delete(
        "https://bookstore-jafq.onrender.com/books/" + id
      );
      setBook(response.data);
      getAllBooks();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const addNewBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bookstore-jafq.onrender.com/books",
        book
      );
      getAllBooks();
      setAddBookModal(false);
      setBook({
        title: "",
        auther: "",
        publishYear: "",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://bookstore-jafq.onrender.com/books",
        book
      );
      getAllBooks();
      setUpdateBookModal(false);
      setBook({
        title: "",
        auther: "",
        publishYear: "",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <div className="flex flex-col items-center">
      {addBookModal && (
        <div className="absolute flex justify-center w-full">
          <AddBookModal
            formFields={["title", "auther", "publishYear", "aboutTheBook"]}
            book={book}
            setBook={setBook}
            submitButton={addNewBook}
            button={"Add Book"}
            setModal={setAddBookModal}
          />
        </div>
      )}
      {updateBookModal && (
        <div className="absolute flex justify-center w-full">
          <AddBookModal
            formFields={["title", "auther", "publishYear", "aboutTheBook"]}
            book={book}
            setBook={setBook}
            submitButton={updateBook}
            button={"Update Book"}
            setModal={setUpdateBookModal}
          />
        </div>
      )}
      {viewBookModal && (
        <div className="absolute flex justify-center w-full">
          <ViewBookDetails
            book={book}
            setBook={setBook}
            setModal={setViewBookModal}
          />
        </div>
      )}
      <div className="flex justify-end w-full">
        <button
          className="text-blue-600 text-[2rem]"
          title="Add new book"
          onClick={() => {
            setAddBookModal(true);
          }}
        >
          <FaPlusCircle />
        </button>
      </div>
      <div className="flex flex-wrap w-[88vw]">
        {books.map((book) => {
          return (
            <BookCard
              key={book._id}
              book={book}
              getBook={getBook}
              deleteBook={deleteBook}
              setViewBookModal={setViewBookModal}
              setUpdateBookModal={setUpdateBookModal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
