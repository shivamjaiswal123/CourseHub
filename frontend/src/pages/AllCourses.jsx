import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { allCourse } from '../api/courses.api';
import { AlertTriangle } from 'lucide-react';

function AllCourses() {
  const {
    data: allCourses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['all-courses'],
    queryFn: allCourse,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span class="loading loading-bars loading-md" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center space-y-1 h-screen">
        <AlertTriangle size={36} />
        <span className="text-3xl font-medium text-black">Opps...!</span>
        <span className="text-lg font-medium text-gray-800">
          Something went wrong.
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="px-4 py-8 sm:p-6 lg:px-8">
        <h1 className="text-3xl mb-6 text-gray-900 font-bold">
          Explore Our Courses
        </h1>
        {/* Search Box and Filter Option*/}
        <div className="space-y-4 sm:flex sm:space-x-4 items-center">
          <input
            className="p-2.5 border border-gray-300 text-sm font-medium rounded-md w-full"
            type="text"
            placeholder="Search courses..."
          />
          <select
            id="small"
            className="w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:border-2 sm:w-52"
          >
            <option selected>Filter by level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advance">Advanced</option>
          </select>
        </div>

        {/* All courses */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allCourses.courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={course.thumbnail}
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
                    {/* Instructor: {course.instructor} */}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{course.price}
                    </span>
                  </div>
                  <div className="ml-auto">
                    <Link
                      to={`/course/${course._id}`}
                      state={course}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      View Details
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

export default AllCourses;
