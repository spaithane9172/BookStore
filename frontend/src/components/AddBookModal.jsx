import React from "react";
import { FaWindowClose } from "react-icons/fa";

const AddBookModal = ({
  formFields,
  book,
  setBook,
  submitButton,
  button,
  setModal,
}) => {
  return (
    <div className="flex justify-center w-full">
      <form
        onSubmit={submitButton}
        className="w-fit  pb-[2rem] shadow-xl border-gray-200 border-[1px] rounded-lg bg-white"
      >
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
        <div className="px-[2rem]">
          {formFields.map((field) => {
            return (
              <div key={field}>
                <input
                  type="text"
                  name={field}
                  value={book[field]}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full md:w-[30vw] px-4 py-2 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 my-[0.5rem] placeholder:text-[0.8rem]"
                  onChange={(e) => {
                    setBook({ ...book, [e.target.name]: e.target.value });
                  }}
                  required
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-[1rem]">
          <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200">
            {button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookModal;
