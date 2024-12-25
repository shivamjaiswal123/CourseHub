import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function RootLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
