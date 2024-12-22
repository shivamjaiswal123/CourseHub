import React from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputField from '../components/InputField';
import Button from '../components/Button';
import AccountInstruction from '../components/AccountInstruction';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Signin() {
  return (
    <div className="bg-gradient-to-b from-indigo-100 to-white">
      <div className="min-h-screen flex flex-col justify-center">
        <form className="space-y-4 bg-white w-full max-w-md mx-auto rounded-md p-8">
          <Heading label="Welcome Back" />
          <SubHeading label="Please enter your details" />
          <InputField label="Email" placeholder="johndoe@gmail.com" />
          <InputField label="Password" placeholder="*******" />
          <Button label="Sign in" />
          <AccountInstruction
            label="Don't have an account"
            nav="Sign up"
            route="/signup"
          />
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

export default Signin;
