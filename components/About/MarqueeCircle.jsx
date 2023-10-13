import React from 'react';

export const MarqueeCircle = () => {
  return (
    <div className="relative flex w-4 mb-5">
      <svg
        className="absolute fill-black dark:fill-white transition-all duration-500"
        version="1.1"
        baseProfile="full"
        width="10"
        height="10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" />
      </svg>
    </div>
  );
};
