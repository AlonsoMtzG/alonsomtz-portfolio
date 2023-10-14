import React from 'react';
import Marquee from 'react-fast-marquee';
import { MarqueeCircle } from './MarqueeCircle';

const titles = ['Software Engineer', 'Full Stack Developer', 'UI/UX Designer'];

export const TextMarquee = () => {
  return (
    <Marquee className="items-center" autoFill={true} direction={'left'}>
      {titles.map((val, idx) => (
        <div key={idx} className="flex h-full items-center pb-2">
          <span className="mx-10 text-5xl font-satoshi font-thin">{val}</span>
          <MarqueeCircle />
        </div>
      ))}
    </Marquee>
  );
};
