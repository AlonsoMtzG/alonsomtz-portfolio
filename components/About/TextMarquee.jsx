import React from 'react';
import Marquee from 'react-fast-marquee';
import { MarqueeCircle } from './MarqueeCircle';

const titles = ['Software Engineer', 'Full Stack Developer', 'UI/UX Designer'];

export const TextMarquee = () => {
  return (
    <Marquee className="items-center" autoFill={true} direction={'left'}>
      {titles.map((val, idx) => (
        <div key={idx} className="flex h-full items-center">
          <span className="mx-10 text-8xl font-westgate">{val}</span>
          <MarqueeCircle />
        </div>
      ))}
    </Marquee>
  );
};
