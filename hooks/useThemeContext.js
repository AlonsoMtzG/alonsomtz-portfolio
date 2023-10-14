"use client";
import { useContext } from "react";
import { ProjectThemeContext } from "@/context/Theme";
import { colorVariants, projects } from "@/constants";

export const useThemeContext = () => {
  const { selectedProject, setSelectedProject } =
    useContext(ProjectThemeContext);

  const textColorSelected =
    colorVariants[projects[selectedProject].colorClass].selected;
  const textColorUnSelected =
    colorVariants[projects[selectedProject].colorClass].unselected;

  return {
    selectedProject,
    setSelectedProject,
    textColorSelected,
    textColorUnSelected,
  };
};
