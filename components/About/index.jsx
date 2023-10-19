'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

export const About = () => {
  return (
    <div className="py-14">
      <h1 className="font-medium text-4xl">Software Engineer</h1>
      <h3 className="font-thin text-zinc-400 text-lg">
        Full Stack Development | UI/UX Design
      </h3>
      <div className="font-thin flex gap-1 text-zinc-400 text-lg">
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
  );
};
