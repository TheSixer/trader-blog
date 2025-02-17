import React from 'react';

const TAG_COLORS = [
  'bg-blue-500/50 text-white border-blue-600',
  'bg-green-500/50 text-white border-green-600',
  'bg-yellow-500/50 text-white border-yellow-600',
  'bg-red-500/50 text-white border-red-600',
  'bg-purple-500/50 text-white border-purple-600',
  'bg-pink-500/50 text-white border-pink-600',
];

const Tag = ({ text, colorIndex }) => {
  const colorClass = TAG_COLORS[colorIndex % TAG_COLORS.length];
  
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-md mr-2 border border-solid ${colorClass} hover:opacity-90 transition-opacity`}>
      {text}
    </span>
  );
};

export default Tag; 