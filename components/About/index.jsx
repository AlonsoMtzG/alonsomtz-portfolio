import React from 'react';
import { TextMarquee } from './TextMarquee';

export const About = () => {
  return (
    <div className="py-10">
      <TextMarquee />
      <div className="px-10">
        <p className="font-light">
          Hi I'm Alonso Martínez, passionate about crafting{' '}
          <span className="font-semibold text-indigo-600">
            memorable user experiences.
          </span>
        </p>
      </div>
    </div>
  );
};
