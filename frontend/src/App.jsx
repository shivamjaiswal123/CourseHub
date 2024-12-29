import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import AllCourses from './pages/AllCourses';
import CourseDetail from './pages/CourseDetail';
import RootLayout from './components/RootLayout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <ToastContainer stacked autoClose={2000} />;
    </>
  );
}

export default App;
