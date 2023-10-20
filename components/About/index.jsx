'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

export const About = ({ divRef }) => {
  return (
    <section className="h-[88.5dvh] flex items-center justify-center">
      <div
        className="mb-12 gap-1 flex-col w-full flex items-center justify-center"
        ref={divRef}
      >
        <h1 className="font-medium text-5xl">Software Engineer</h1>
        <h3 className="font-thin text-zinc-400 text-xl">
          Full Stack Development | UI/UX Design
        </h3>
        <div className="font-thin flex gap-1 text-zinc-400 text-xl">
          passionate about{' '}
          <span className="font-medium text-blue-600 transition-all duration-300">
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
    </section>
  );
};
