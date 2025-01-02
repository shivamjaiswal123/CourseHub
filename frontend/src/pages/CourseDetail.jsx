import { BarChart, Check, CircleCheckBig, Clock } from 'lucide-react';
import React, { useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { purchaseCourse } from '../api/courses.api';
import { useRecoilValue } from 'recoil';
import { authState } from '../store/atoms/auth.atom';
import { toast } from 'react-toastify';

function CourseDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const modalRef = useRef(null);
  const auth = useRecoilValue(authState);

  const { mutate: doPurchase, isPending } = useMutation({
    mutationFn: purchaseCourse,
    onSuccess: () => {
      modalRef.current.showModal();
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const enrollToCourse = () => {
    if (auth) {
      doPurchase(id);
    } else {
      navigate('/signin');
    }
  };

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
                {state.learningObjectives.map((objective, index) => (
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
                src={state.thumbnail}
                alt={state.title}
                width={300}
                height={200}
              />
            </div>
            <div>
              <p className="font-medium text-2xl mb-3">₹{state.price}</p>
              <button
                onClick={enrollToCourse}
                className="bg-black text-white w-full py-2 rounded-md font-medium disabled:bg-gray-600"
                disabled={isPending}
              >
                Enroll now
              </button>
            </div>
            {/* TODO:: add duration and level in course schema */}
            <div className="space-y-2 mt-3 font-medium">
              <p className="text-gray-400">This course include:</p>
              <div className="flex gap-2 items-center">
                <Clock className="text-gray-400" size={20} />
                <span>{state.duration}12 weeks of content</span>
              </div>
              <div className="flex gap-2 items-center">
                <BarChart className="text-gray-400" size={20} />
                <span className="">{state.level}Beginner level</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* purchase modal  */}
      <dialog ref={modalRef} id="my_modal_1" className="modal">
        <div className="modal-box text-center">
          <div className="bg-green-600 mx-auto mb-2 w-14 h-14 rounded-full flex items-center justify-center">
            <Check className="text-white" strokeWidth={4} size={32} />
          </div>
          <h3 className="font-bold text-2xl">Purchase Successful</h3>
          <p className="py-4 text-lg text-gray-700 font-medium tracking-wide">
            Your purchased content will be available to access in your account
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CourseDetail;
