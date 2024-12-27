import React, { useState } from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputField from '../components/InputField';
import Button from '../components/Button';
import AccountInstruction from '../components/AccountInstruction';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { signin } from '../api/user.api';
import { toast } from 'react-toastify';

const form = {
  email: '',
  password: '',
};

function Signin() {
  const [formData, setFormData] = useState(form);

  const { mutate: doSignin, isPending } = useMutation({
    mutationFn: signin,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doSignin(formData);
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="bg-gradient-to-b from-indigo-100 to-white"
    >
      <div className="min-h-screen flex flex-col justify-center">
        <form className="space-y-4 bg-white w-full max-w-md mx-auto rounded-md p-8">
          <Heading label="Welcome Back" />
          <SubHeading label="Please enter your details" />
          <InputField
            label="Email"
            name="email"
            onInputChange={handleInputChange}
            placeholder="johndoe@gmail.com"
          />
          <InputField
            label="Password"
            name="password"
            onInputChange={handleInputChange}
            placeholder="*******"
          />
          <Button label="Sign in" isPending={isPending} />
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
