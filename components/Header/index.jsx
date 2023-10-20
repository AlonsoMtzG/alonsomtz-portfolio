'use client';
import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex py-10 items-center justify-between">
      <Image src="/am-logo.svg" width={50} height={50} priority />
    </div>
  );
};
