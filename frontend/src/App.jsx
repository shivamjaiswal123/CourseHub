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
import ProtectedRoute from './components/ProtectedRoute';
import Enroll from './pages/Enroll';
import MyPurchase from './pages/MyPurchase';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/my-purchases" element={<MyPurchase />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route
          path="/purchase"
          element={
            <ProtectedRoute>
              <Enroll />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
      <ToastContainer stacked autoClose={2000} />;
    </>
  );
}

export default App;
