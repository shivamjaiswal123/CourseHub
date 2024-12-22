import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Web Development Bootcamp',
    instructor: 'Jane Doe',
    price: '$99.99',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    title: 'Data Science Fundamentals',
    instructor: 'John Smith',
    price: '$89.99',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    title: 'UX/UI Design Masterclass',
    instructor: 'Emily Johnson',
    price: '$79.99',
    image: '/placeholder.svg?height=200&width=300',
  },
];

function FeaturedCourses() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore our most popular courses and start learning today
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={course.image}
                  alt={course.title}
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    Instructor: {course.instructor}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-gray-900">
                      {course.price}
                    </span>
                  </div>
                  <div className="ml-auto">
                    <Link
                      to={`/courses/${encodeURIComponent(course.title)}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
