import React from 'react';

const ProjectName = ({ number, name }) => {
  return (
    <>
      <span className={number.class}>{number.text}</span>
      <span className={name.class}>{name.text}</span>
    </>
  );
};

const Selected = ({ number, name }) => {
  return (
    <ProjectName
      number={{ text: number, class: 'text-indigo-600' }}
      name={{ text: name, class: 'text-black dark:text-white' }}
    />
  );
};

const Unselected = ({ number, name }) => {
  return (
    <ProjectName
      number={{
        text: number,
        class: 'text-gray-300 dark:text-gray-600 group-hover:text-indigo-400',
      }}
      name={{
        text: name,
        class:
          'text-gray-300 dark:text-gray-600 dark:group-hover:text-gray-400 group-hover:text-black',
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
              <Selected number={`0${idx + 1}`} name={name} />
            ) : (
              <Unselected number={`0${idx + 1}`} name={name} />
            )}
          </button>
        </div>
      ))}
    </>
  );
};
