import React from 'react';

const FamilyNode = ({ node, style, onClick, isSelected }) => {
  return (
    <div
      className={`flex flex-col items-center p-2 bg-white rounded-lg shadow-lg cursor-pointer ${
        isSelected ? 'border-4 border-blue-500' : 'hover:shadow-2xl'
      }`}
      style={style}
      onClick={onClick}
    >
      <img
        src={node.image || 'https://via.placeholder.com/80'}
        alt={node.name}
        className="w-16 h-16 rounded-full object-cover mb-2"
      />
      <p className="text-sm text-gray-800 font-medium">{node.name || 'Unnamed'}</p>
    </div>
  );
};

export default FamilyNode;
