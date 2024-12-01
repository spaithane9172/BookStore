import React from "react";
import { FaWindowClose } from "react-icons/fa";

const ViewBookDetails = ({ book, setBook, setModal }) => {
  console.log(book);
  return (
    <div className="flex justify-center w-full">
      <div className="w-fit  pb-[2rem] shadow-xl border-gray-200 border-[1px] rounded-lg bg-white">
        <div className="py-[0.5rem] flex justify-end px-[0.5rem]">
          <FaWindowClose
            className="rounded-full text-[1.2rem] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setBook({
                title: "",
                auther: "",
                publishYear: "",
              });
              setModal(false);
            }}
          />
        </div>
        <div className="w-[40vw] px-[2rem]">
          <h1 className="text-[1.5rem] font-bold mb-[0.5rem]">{book.title}</h1>
          <p>
            <span className="text-[1rem] font-semibold">Autehr: </span>
            <span className="text-[0.9rem]"> {book.auther}</span>
          </p>
          <p className="mb-[1rem]">
            <span className="text-[1rem] font-semibold">Publish Year: </span>
            <span className="text-[0.9rem]"> {book.publishYear}</span>
          </p>
          <p className="mb-[3rem]">
            <span className="text-[1.2rem] font-semibold">About The Book </span>
            <p className="text-[0.9rem] pl-[1rem] text-justify">
              {" "}
              {book.aboutTheBook}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewBookDetails;
