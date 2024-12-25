import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedCourses from '../components/FeaturedCourses';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCourses />
    </div>
  );
}

export default Home;
