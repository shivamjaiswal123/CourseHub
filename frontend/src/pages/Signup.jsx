import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div className="bg-gradient-to-b from-indigo-100 to-white">
      <div className="min-h-screen flex flex-col justify-center">
        <form className="space-y-4 bg-white w-full max-w-md mx-auto rounded-md p-8">
          <div>
            <h1 className="text-black font-bold text-2xl text-center">
              Create your account
            </h1>
            <p className="text-gray-500 text-base font-medium mt-2">
              Join EduHub and start your learning journey today
            </p>
          </div>
          <div className="space-y-2">
            <label
              className="block text-black font-semibold"
              htmlFor="fullname"
            >
              Full Name
            </label>
            <input
              className="w-full p-2 rounded border border-gray-400"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-black font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 rounded border border-gray-400"
              type="text"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <label
              className="block text-black font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 rounded border border-gray-400"
              type="text"
              placeholder="*******"
            />
          </div>
          <button className="bg-black w-full text-white py-3 rounded-md font-medium">
            Sign up
          </button>
          <div className="text-center">
            <span className="font-semibold text-sm text-gray-500">
              Already have an account?
            </span>
            <Link
              to="/signin"
              className="ml-2 text-indigo-600 hover:text-indigo-800"
            >
              Sign in
            </Link>
          </div>
          <Link to="/" className="flex justify-center space-x-2  mx-auto">
            <ArrowLeft size={20} />
            <span className="text-center text-sm font-medium text-gray-500 hover:text-gray-700">
              Back to home
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
