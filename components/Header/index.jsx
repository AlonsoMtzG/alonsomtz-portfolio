'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

import { useThemeContext } from '@/hooks/useThemeContext';
import { LangButton } from './LangButton';

export const Header = () => {
  const { textColorSelected } = useThemeContext();

  return (
    <div className="flex px-10 py-14 items-center justify-between">
      <span className="font-satoshi font-bold">Alonso Mtz</span>
      <p className="font-light flex gap-1">
        passionate about{' '}
        <span
          className={`font-semibold ${textColorSelected} transition-all duration-300`}
        >
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
      </p>
      <LangButton />
    </div>
  );
};
