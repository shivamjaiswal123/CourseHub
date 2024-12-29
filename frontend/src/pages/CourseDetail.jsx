import { BarChart, CircleCheckBig, Clock } from 'lucide-react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const course = {
  id: 1,
  title: 'Web Development Bootcamp',
  instructor: 'Jane Doe',
  level: 'Beginner',
  duration: '12 weeks',
  rating: 4.8,
  students: 10234,
  price: 99.99,
  image: '/placeholder.svg?height=400&width=600',
  description:
    'This comprehensive Web Development Bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS basics to advanced JavaScript, React, Node.js, and database management, this course will take you from beginner to job-ready.',
  learningObjectives: [
    'Understand the fundamentals of web development',
    'Master HTML5, CSS3, and modern JavaScript',
    'Build responsive and interactive websites',
    'Learn backend development with Node.js and Express',
    'Work with databases like MongoDB and MySQL',
    'Develop full-stack applications using the MERN stack',
  ],
};

function CourseDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="px-6 py-16 space-y-6 grid grid-cols-1 md:px-10 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">{state.title}</h1>
            <p className="text-gray-600 text-lg font-medium">
              {state.description}
            </p>
          </div>

          <div className="bg-white shadow-md border border-gray-300 rounded">
            <div className="px-6 py-4 space-y-6">
              <h1 className="text-2xl font-medium text-black tracking-tight">
                What you'll learn
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {course.learningObjectives.map((objective, index) => (
                  <ul key={index}>
                    <li className="flex gap-2 mb-3">
                      <CircleCheckBig className="text-green-500" size={23} />
                      <span className="font-medium text-gray-900">
                        {objective}
                      </span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md border border-gray-300 rounded">
          <div className="px-6 py-4">
            <div>
              <img
                className="w-full h-48 object-cover"
                src={course.image}
                alt={course.title}
                width={300}
                height={200}
              />
            </div>
            <div>
              <p className="font-medium text-2xl mb-3">${state.price}</p>
              <button
                onClick={() => navigate('/purchase')}
                className="bg-black text-white w-full py-2 rounded-md font-medium"
              >
                Enroll now
              </button>
            </div>
            <div className="space-y-2 mt-3 font-medium">
              <p className="text-gray-400">This course include:</p>
              <div className="flex gap-2 items-center">
                <Clock className="text-gray-400" size={20} />
                <span>{course.duration} of content</span>
              </div>
              <div className="flex gap-2 items-center">
                <BarChart className="text-gray-400" size={20} />
                <span className="">{course.level} level</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
