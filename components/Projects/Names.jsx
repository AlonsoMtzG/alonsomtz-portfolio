import { colorVariants, projects } from '@/constants';
import React from 'react';

const ProjectName = ({ number, name }) => {
  return (
    <>
      <span className={number.class}>{number.text}</span>
      <span className={name.class}>{name.text}</span>
    </>
  );
};

const Selected = ({ number, name, textClass }) => {
  return (
    <ProjectName
      number={{ text: number, class: textClass }}
      name={{ text: name, class: 'text-black dark:text-white' }}
    />
  );
};

const Unselected = ({ number, name, textClass }) => {
  return (
    <ProjectName
      number={{
        text: number,
        class: `text-gray-300 dark:text-gray-600 ${textClass} group-hover:opacity-60 transition-all duration-200`,
      }}
      name={{
        text: name,
        class:
          'text-gray-300 dark:text-gray-600 dark:group-hover:text-gray-400 group-hover:text-black transition-all duration-200',
      }}
    />
  );
};

export const Names = ({ projects, selectedProject, setSelectedProject }) => {
  return (
    <>
      {projects.map(({ name }, idx) => (
        <div key={name}>
          <button
            className="group flex font-westgate text-7xl gap-2 w-fit"
            onClick={() => setSelectedProject(idx)}
          >
            {selectedProject === idx ? (
              <Selected
                number={`0${idx + 1}`}
                name={name}
                textClass={
                  colorVariants[projects[selectedProject].colorClass].selected
                }
              />
            ) : (
              <Unselected
                number={`0${idx + 1}`}
                name={name}
                textClass={
                  colorVariants[projects[selectedProject].colorClass].unselected
                }
              />
            )}
          </button>
        </div>
      ))}
    </>
  );
};
