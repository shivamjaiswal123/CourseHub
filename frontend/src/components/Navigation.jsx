import React, { useState } from 'react';
import { Book, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Book className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                CourseHub
              </span>
            </div>
          </div>
          <div className="hidden sm:flex sm:space-x-8 sm-text-lg">
            <Link
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              to="/courses"
            >
              Courses
            </Link>
            <Link
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
              to="/about"
            >
              About
            </Link>
            <Link
              className="h-2/3 my-auto px-5 text-base font-medium text-gray-900 bg-white rounded-lg border-2 border-black hover:bg-gray-200 inline-flex items-center"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              className="block border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              to="/courses"
            >
              Courses
            </Link>
            <Link
              className="block border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              to="/about"
            >
              About
            </Link>
            <Link
              className="block mx-4 text-white text-center bg-gray-900 rounded-md py-2.5 text-base font-medium"
              to="/signup"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
