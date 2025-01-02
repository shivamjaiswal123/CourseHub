import React, { useState } from 'react';
import { Book, LogOut, Menu, User, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authState } from '../store/atoms/auth.atom';
import { useQuery } from '@tanstack/react-query';
import { getMe } from '../api/user.api';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);

  const { data, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    enabled: !!auth, // Only fetch data when the user is authenticated
  });

  if (isLoading) {
    return;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuth(null);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div
              onClick={() => navigate('/')}
              className="flex-shrink-0 flex items-center cursor-pointer"
            >
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
            {auth ? (
              <div className="dropdown dropdown-end my-auto">
                <button
                  tabIndex={0}
                  className="w-10 h-10 rounded-full bg-blue-700"
                >
                  <User
                    className="mx-auto text-white"
                    size={20}
                    strokeWidth={2.5}
                  />
                </button>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <div className="flex flex-col">
                      {data.user.username}
                      <span className="badge">{data.user.email}</span>
                    </div>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/my-purchases">Purchase</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="text-red-600">
                      <LogOut size={18} />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                className="px-3 py-2 my-auto text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-700 inline-flex items-center"
                to="/signup"
              >
                Sign Up
              </Link>
            )}
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
            {auth ? (
              <div>
                <Link
                  className="block border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  to="/profile"
                >
                  Profile
                </Link>
                <Link
                  className="block border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  to="/my-purchases"
                >
                  Purchase
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-600 w-full hover:bg-gray-100 py-2 rounded font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                className="block mx-4 text-white text-center bg-gray-900 rounded-md py-2.5 text-base font-medium"
                to="/signup"
              >
                Sign up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
