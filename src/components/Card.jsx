import React from 'react'

const Card = ({ title, description }) => {
  return (
    <div className="border-2 border-indigo-500 p-4 rounded-lg text-gray-100 mx-15">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="p-2 text-sm text-gray-300">
        {description}
      </p>
    </div>
  );
}

export default Card