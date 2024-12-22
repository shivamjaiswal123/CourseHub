import React from 'react';

function Button({ label }) {
  return (
    <button className="bg-black w-full text-white py-3 rounded-md font-medium">
      {label}
    </button>
  );
}

export default Button;
