import React from 'react';
import { LangButton } from './LangButton';
import { Toggle } from '../Toggle';

export const Header = () => {
  return (
    <div className="flex px-10 py-10 items-center justify-between">
      <div />
      <span className="font-westgate font-light text-3xl">Alonso Mtz</span>
      <LangButton />
    </div>
  );
};
