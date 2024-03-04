import React from 'react'

const Infobtn = ({ onClick,index }) => {
  return (
    <button onClick={() => onClick(index)} className="bg-stone-900 border border-orange-500 rounded-md p-1 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-orange-100"> {/* Set SVG color and size */}
        <path fill="#ffffff" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path fill="#ffffff" d="M11 7h2v2h-2zm0 4h2v6h-2z"/>
      </svg>
    </button>
  )
}

export default Infobtn;
