import React from 'react';
import Image from 'next/image';
import { TechsCircle } from './TechsCircle';

export const Content = ({ project }) => {
  const { name, techs, description, imagesSrc } = project;
  return (
    <>
      <div className="flex items-center gap-4">
        {techs.map((val, idx) => (
          <div key={val + idx} className="flex items-center">
            <span className="text-gray-400 dark:text-gray-600 text-sm mr-2">
              {val}
            </span>
            {idx < techs.length - 1 && <TechsCircle />}
          </div>
        ))}
      </div>
      <p className="font-light">{description}</p>
      <div>
        {imagesSrc.map((val, idx) => (
          <Image
            priority={true}
            key={val + idx}
            width={1920}
            height={1440}
            className="w-full"
            src={val}
            alt={name}
          />
        ))}
      </div>
    </>
  );
};
