import React from 'react';

function Button({ label, isPending }) {
  return (
    <button
      className="bg-black w-full text-white py-3 rounded-md font-medium flex justify-center items-center gap-1 disabled:bg-gray-600"
      disabled={isPending}
    >
      {label}
      {isPending && <span className="loading loading-dots loading-xs" />}
    </button>
  );
}

export default Button;
