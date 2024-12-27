import React from 'react';

function InputField({ label, placeholder, name, onInputChange }) {
  return (
    <div className="space-y-2">
      <label className="block text-black font-semibold" htmlFor="fullname">
        {label}
      </label>
      <input
        className="w-full p-2 rounded border border-gray-400"
        name={name}
        onChange={onInputChange}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
