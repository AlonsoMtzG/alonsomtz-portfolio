'use client';
import React from 'react';

import { LangButton } from './LangButton';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex py-14 items-center justify-between">
      <Image src="/am-logo.svg" width={50} height={50} priority />
      <LangButton />
    </div>
  );
};
