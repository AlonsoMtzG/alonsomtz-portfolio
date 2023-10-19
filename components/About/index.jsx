'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

export const About = () => {
  return (
    <div className="h-[88.5dvh] flex items-center">
      <div className="mb-12 gap-1 flex flex-col justify-center">
        <h1 className="font-medium text-6xl">Software Engineer</h1>
        <h3 className="font-thin text-zinc-400 text-2xl">
          Full Stack Development | UI/UX Design
        </h3>
        <div className="font-thin flex gap-1 text-zinc-400 text-2xl">
          passionate about{' '}
          <span className="font-medium transition-all duration-300">
            <Typewriter
              options={{
                strings: [
                  'crafting memorable user experiences.',
                  'merging code and creativity.',
                  'building digital ecosystems.',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
