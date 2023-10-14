'use client';
import React from 'react';

import { projects } from '@/constants';

import { Names } from './Names';
import { Content } from './Content';
import { useThemeContext } from '@/hooks/useThemeContext';

export const Projects = () => {
  const {
    selectedProject,
    setSelectedProject,
    textColorSelected,
    textColorUnSelected,
  } = useThemeContext();

  return (
    <div className="py-14 px-10 flex">
      <div className="flex flex-[0.8] flex-col gap-3">
        <Names
          projects={projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          textColorSelected={textColorSelected}
          textColorUnSelected={textColorUnSelected}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Content project={projects[selectedProject]} />
      </div>
    </div>
  );
};
