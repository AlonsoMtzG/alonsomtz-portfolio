import React from 'react';
import Link from 'next/link';

import { TwitterIcon } from './TwitterIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { GithubIcon } from './GithubIcon';

export const Footer = () => {
  return (
    <footer className="px-10 py-14 flex justify-between">
      <div className="flex gap-1">
        <span className="text-blue-600 font-semibold transition-all duration-300">
          Email me:
        </span>
        <Link href="mailto: luisalonsomtzg@gmail.com" className="font-light">
          luisalonsomtzg@gmail.com
        </Link>
      </div>
      <div className="flex gap-2">
        <Link
          target="_blank"
          href="https://twitter.com/alonsomdev"
          className="opacity-70 hover:opacity-100"
        >
          <TwitterIcon size={22} />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/alonsomtzgar/"
          className="opacity-70 hover:opacity-100"
        >
          <LinkedinIcon size={24} />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/AlonsoMtzG"
          className="opacity-70 hover:opacity-100"
        >
          <GithubIcon size={22} />
        </Link>
      </div>
    </footer>
  );
};
