import React from 'react';

export default function Alertcard({ onYes, onNo }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-stone-800 text-orange-100 rounded text-center">
        <div className="bg-orange-500 h-1 rounded-t" />
        <div className="flex flex-col items-center justify-center p-4">
          <span className="flex items-center justify-center m-4">Delete This Task?</span>
          <div className="flex items-baseline justify-center space-x-4">
       
            <button onClick={onYes} className='p-0.5 bg-stone-800 rounded w-20 border border-orange-500 text-orange-100'>Yes</button>
            <button onClick={onNo} className='p-0.5 bg-stone-800 rounded w-20 border border-orange-500 text-orange-100'>No</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
