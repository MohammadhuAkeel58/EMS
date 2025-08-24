import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg font-rajdhani p-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-white font-bold text-2xl md:text-3xl mb-2 md:mb-0">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-indigo-200">
            Employee Management System
          </span>
        </h1>
        <div className="flex space-x-2 md:space-x-6 text-lg">
          <Link
            to="/"
            className="text-white hover:text-blue-200 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-blue-500/20"
          >
            Employee List
          </Link>
          <Link
            to="/create"
            className="text-white hover:text-blue-200 transition-colors duration-300 px-3 py-1 rounded-lg hover:bg-blue-500/20"
          >
            Add Employee
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
