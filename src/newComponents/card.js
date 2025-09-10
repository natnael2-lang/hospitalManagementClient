import React from 'react';

const Card = ({ title, content, imageSrc, buttonLabel, onButtonClick }) => {
  return (
    <div className="min-w-[200px] rounded overflow-hidden shadow-lg bg-white">
      {imageSrc && (
        <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {content}
        </p>
      </div>
      <div className="px-6 py-4">
        {buttonLabel && (
          <button 
            onClick={onButtonClick} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;