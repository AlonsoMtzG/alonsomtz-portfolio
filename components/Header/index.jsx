import React from 'react';
import { LangButton } from './LangButton';

export const Header = () => {
  return (
    <div className="flex px-10 py-10 items-center justify-between">
      <div />
      <span className="font-satoshi font-bold text-xl">Alonso Mtz</span>
      <LangButton />
    </div>
  );
};
