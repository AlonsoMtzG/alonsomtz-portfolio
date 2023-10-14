'use client';
import React from 'react';

import { useThemeContext } from '@/hooks/useThemeContext';
import { TextMarquee } from './TextMarquee';

export const About = () => {
  const { textColorSelected } = useThemeContext();

  return (
    <div className="py-10">
      <TextMarquee />
      <div className="px-10">
        <p className="font-light">
          Hi I'm Alonso Martínez, passionate about crafting{' '}
          <span
            className={`font-semibold ${textColorSelected} transition-all duration-300`}
          >
            memorable user experiences.
          </span>
        </p>
      </div>
    </div>
  );
};
