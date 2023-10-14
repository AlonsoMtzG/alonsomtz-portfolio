"use client";
import { createContext, useEffect, useState } from "react";

export const ProjectThemeContext = createContext();

export const ProjectTheme = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <ProjectThemeContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </ProjectThemeContext.Provider>
  );
};
