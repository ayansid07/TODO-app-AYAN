import React from 'react';

export default function UpdateButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="p-1 bg-stone-900 border border-orange-500 text-orange-500 rounded-md p-2 flex items-center justify-center">
      <h2>Update</h2>
    </button>
  )
}
