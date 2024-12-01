import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 fixed top-0 left-0 w-full shadow-lg z-10 px-[3rem]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-white">BookStore</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 w-[30vw]">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 transition duration-200"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
