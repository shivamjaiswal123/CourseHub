import React from 'react';

function InputField({ label, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="block text-black font-semibold" htmlFor="fullname">
        {label}
      </label>
      <input
        className="w-full p-2 rounded border border-gray-400"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
