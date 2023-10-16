'use client';
import React from 'react';
import { JellyTriangle } from '@uiball/loaders';

export const Building = () => {
  return (
    <div className="flex items-center flex-col gap-10 justify-center w-full h-full">
      <JellyTriangle size={60} speed={1} color="white" />
      <div className="text-center gap-2 flex flex-col">
        <h1 className="font-bold text-7xl font-bigShoulder uppercase">
          Hi, I'm
        </h1>
        <h1 className="font-bold text-4xl font-bigShoulder uppercase">
          Alonso Mtz
        </h1>
      </div>
      <div className="text-center">
        <p className="font-satoshi text-gray-100">Currently updating my site</p>
        <p className="font-satoshi text-gray-100">
          But thank you for your visit.
        </p>
      </div>
    </div>
  );
};
