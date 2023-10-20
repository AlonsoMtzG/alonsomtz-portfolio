import React from 'react';
import Image from 'next/image';
import { TechsCircle } from './TechsCircle';

export const Content = ({ idx, name, techs, description, src, textColor }) => {
  return (
    <div className="flex relative flex-col gap-8">
      <div className="flex flex-col text-center px-8 py-5">
        <span className={`text-5xl font-medium ${textColor}`}>{`0${
          idx + 1
        }`}</span>
        <span className="text-xl font-medium">{name}</span>
      </div>
      <div>
        <div className="flex items-center gap-3 md:gap-4 justify-center flex-wrap gap-y-1">
          {techs.map((val, idx) => (
            <div key={val + idx} className="flex items-center">
              <span className="text-zinc-400 text-sm md:text-base font-thin mr-2">
                {val}
              </span>
              {idx < techs.length - 1 && <TechsCircle />}
            </div>
          ))}
        </div>
        <p className="md:text-lg font-thin text-center">{description}</p>
      </div>
      <Image
        src={src}
        alt={name}
        width={1920}
        height={1080}
        className="w-full rounded-2xl"
      />
    </div>
  );
};
