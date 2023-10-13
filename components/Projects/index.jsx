'use client';
import React, { useState } from 'react';

import { projects } from '@/constants';

import { Names } from './Names';
import { Content } from './Content';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

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
