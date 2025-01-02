import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { myPurchase } from '../api/user.api';
import { AlertTriangle } from 'lucide-react';

function MyPurchase() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['my-purchase'],
    queryFn: myPurchase,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-md" />
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
    <div className="min-h-screen px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.courses.map((course, index) => (
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
              <div className="text-center mt-2">
                <button className="w-full px-4 py-3 text-sm font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                  View Content
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPurchase;
