'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

import { useThemeContext } from '@/hooks/useThemeContext';

export const About = ({ divRef }) => {
  const { textColorSelected } = useThemeContext();

  return (
    <section className="h-[88.5dvh] flex items-center justify-center">
      <div
        className="mb-12 gap-1 flex-col w-full flex items-center justify-center"
        ref={divRef}
      >
        <h1 className="font-medium text-3xl md:text-5xl">Software Engineer</h1>
        <h3 className="font-thin text-zinc-400 md:text-xl">
          Full Stack Development | UI/UX Design
        </h3>
        <div
          className={`font-normal md:text-xl ${textColorSelected} transition-all duration-300 flex-wrap`}
        >
          <Typewriter
            options={{
              strings: [
                'Crafting memorable user experiences.',
                'Merging code and creativity.',
                'Building digital ecosystems.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};
