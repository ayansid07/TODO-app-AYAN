
import React from 'react';

export default function EditButton({ onClick, isActive }) {
  return (
    <button
      className={`bg-${isActive ? 'orange-500' : 'stone-900'} border border-orange-500 rounded-md p-1 flex items-center justify-center`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0,0,256,256"
        className={`text-${isActive ? 'white' : 'orange-500'}`}
      >
        <g fill="#ffffff" fillRule="nonzero">
          <g transform="scale(10.66667,10.66667)">
            <path d="M18,2l-2.41406,2.41406l4,4l2.41406,-2.41406zM14.07617,5.92383l-11.07617,11.07617v4h4l11.07617,-11.07617z"></path>
          </g>
        </g>
      </svg>
    </button>
  );
}
