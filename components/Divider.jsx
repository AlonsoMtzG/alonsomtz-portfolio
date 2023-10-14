'use client';
import { useThemeContext } from '@/hooks/useThemeContext';
import React from 'react';

export const Divider = () => {
  const { bgColor } = useThemeContext();
  return (
    <div className="px-10">
      <div
        className={`h-[0.5px] w-full ${bgColor} transition-all duration-300`}
      />
    </div>
  );
};
