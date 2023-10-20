'use client';
import React from 'react';
import Link from 'next/link';

import { useThemeContext } from '@/hooks/useThemeContext';

import { TwitterIcon } from './TwitterIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { GithubIcon } from './GithubIcon';

export const Footer = () => {
  const { textColorSelected } = useThemeContext();
  return (
    <footer className="gap-y-3 flex flex-col pb-12 md:flex-row justify-between">
      <p className="flex gap-1 text-sm tracking-wider md:text-base">
        <span
          className={`${textColorSelected} font-semibold transition-all duration-300`}
        >
          Email me:
        </span>
        <Link href="mailto: luisalonsomtzg@gmail.com" className="font-light">
          luisalonsomtzg@gmail.com
        </Link>
      </p>
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
