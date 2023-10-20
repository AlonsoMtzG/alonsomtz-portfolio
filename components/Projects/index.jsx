'use client';
import React from 'react';
import Image from 'next/image';

import { projects } from '@/constants';
import { useThemeContext } from '@/hooks/useThemeContext';

import { TechsCircle } from './TechsCircle';

export const Projects = ({ divRef }) => {
  const { selectedProject } = useThemeContext();

  return (
    <section className="flex">
      <div className="flex flex-1 mr-10">
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
          <span className="text-right text-6xl font-medium text-indigo-600">
            01
          </span>
          <span ref={divRef} className="text-right text-2xl font-medium">
            Pixelu Studio
          </span>
        </div>
        <div>
          <div className="flex items-center gap-4 justify-end">
            {projects[selectedProject].techs.map((val, idx) => (
              <div key={val + idx} className="flex items-center">
                <span className="text-zinc-400 text-xl font-thin mr-2">
                  {val}
                </span>
                {idx < projects[selectedProject].techs.length - 1 && (
                  <TechsCircle />
                )}
              </div>
            ))}
          </div>
          <p className="text-right text-xl font-thin">
            {projects[selectedProject].description}
          </p>
        </div>
      </div>
    </section>
  );
};
