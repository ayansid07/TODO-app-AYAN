import React from 'react';

const PlusButton = () => {
  return (
    <button className="p-1 bg-stone-900 border border-orange-500 text-orange-500 rounded-md p-2 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-current" 
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </button>
  );
};

export default PlusButton;
