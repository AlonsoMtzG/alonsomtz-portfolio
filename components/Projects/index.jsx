'use client';
import React from 'react';

import { projects } from '@/constants';

import { Names } from './Names';
import { Content } from './Content';
import { useThemeContext } from '@/hooks/useThemeContext';
import Image from 'next/image';
import { TechsCircle } from './TechsCircle';

export const Projects = () => {
  const {
    selectedProject,
    setSelectedProject,
    textColorSelected,
    textColorUnSelected,
  } = useThemeContext();

  return (
    <div className="py-14 flex">
      <div className="flex flex-1 flex-col gap-3">
        <Image
          priority={true}
          width={1920}
          height={1440}
          className="w-full"
          src={projects[selectedProject].src}
          alt={projects[selectedProject].name}
        />
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-col">
          <span className="text-right text-4xl font-medium text-indigo-600">
            01
          </span>
          <span className="text-right text-4xl font-medium">Pixelu Studio</span>
        </div>
        <div>
          <div className="flex items-center gap-4 justify-end">
            {projects[selectedProject].techs.map((val, idx) => (
              <div key={val + idx} className="flex items-center">
                <span className="text-zinc-400 text-lg font-thin mr-2">
                  {val}
                </span>
                {idx < projects[selectedProject].techs.length - 1 && (
                  <TechsCircle />
                )}
              </div>
            ))}
          </div>
          <p className="text-right text-lg font-thin">
            {projects[selectedProject].description}
          </p>
        </div>
      </div>
    </div>
  );
};
