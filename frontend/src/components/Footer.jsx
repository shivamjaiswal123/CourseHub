import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="sr-only">EduHub</span>
              <BookOpen
                className="text-indigo-500"
                strokeWidth={2.5}
                size={34}
              />
              <span className="ml-3 text-xl font-bold text-white">EduHub</span>
            </Link>
            <p className="text-gray-400 text-base">
              Empowering learners worldwide with expert-led online courses.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Commerce
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      API Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Jobs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Claim
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 EduHub, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
