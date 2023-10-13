import React from 'react';
import { LangButton } from './LangButton';
import { Toggle } from '../Toggle';

export const Header = () => {
  return (
    <div className="flex h-20 items-center justify-between">
      <LangButton />
      <span className="font-westgate text-3xl">Alonso Mtz</span>
      <Toggle label={'Dark Mode'} />
    </div>
  );
};
