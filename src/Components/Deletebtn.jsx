
import React from 'react';

const Deletebutton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="p-2 bg-stone-900 border border-orange-500 text-orange-500 rounded-md p-1 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-orange-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.707 5.293a1 1 0 011.414 0L10 8.586l3.879-3.88a1 1 0 111.414 1.414L11.414 10l3.88 3.879a1 1 0 11-1.414 1.414L10 11.414l-3.879 3.88a1 1 0 01-1.414-1.414L8.586 10 4.707 6.121a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default Deletebutton;
