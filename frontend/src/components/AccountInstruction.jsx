import React from 'react';
import { Link } from 'react-router-dom';
function AccountInstruction({ label, nav, route }) {
  return (
    <div className="text-center">
      <span className="font-semibold text-sm text-gray-500">{label}</span>
      <Link to={route} className="ml-2 text-indigo-600 hover:text-indigo-800">
        {nav}
      </Link>
    </div>
  );
}

export default AccountInstruction;
