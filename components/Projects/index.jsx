'use client';
import React, { useContext } from 'react';

import { projects } from '@/constants';

import { Names } from './Names';
import { Content } from './Content';
import { ProjectThemeContext } from '@/context/Theme';

export const Projects = () => {
  const { selectedProject, setSelectedProject } =
    useContext(ProjectThemeContext);

  return (
    <div className="py-10 px-10 flex">
      <div className="flex flex-[0.8] flex-col gap-3">
        <Names
          projects={projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Content project={projects[selectedProject]} />
      </div>
    </div>
  );
};
