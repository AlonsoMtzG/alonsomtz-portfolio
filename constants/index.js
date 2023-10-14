const projectsPath = "/projects";

export const colorVariants = {
  pixelu: {
    selected: "text-indigo-600",
    unselected: "group-hover:text-indigo-600",
  },
  enigma: {
    selected: "text-rose-600",
    unselected: "group-hover:text-rose-600",
  },
  studya: {
    selected: "text-sky-900",
    unselected: "group-hover:text-sky-900",
  },
  hitec: {
    selected: "text-sky-600",
    unselected: "group-hover:text-sky-600",
  },
  bamx: {
    selected: "text-rose-600",
    unselected: "group-hover:text-rose-600",
  },
  feedback: {
    selected: "text-violet-500",
    unselected: "group-hover:text-violet-500",
  },
  lert: {
    selected: "text-blue-600",
    unselected: "group-hover:text-blue-600",
  },
};

export const projects = [
  {
    name: "Pixelu Studio",
    techs: ["Next.js", "Tailwind CSS", "Framer Motion"],
    description:
      "Landing page of my digital design & software development studio.",
    src: `${projectsPath}/pixelu.gif`,
    colorClass: "pixelu",
  },
  {
    name: "Enigma",
    techs: ["Next.js", "Tailwind CSS", "Firebase", "Stripe"],
    description: "E-commerce platform to purchase event tickets.",
    src: `${projectsPath}/enigma.gif`,
    colorClass: "enigma",
  },
  {
    name: "Studya",
    techs: ["Next.js"],
    description: "",
    src: `${projectsPath}/studya.gif`,
    colorClass: "studya",
  },
  {
    name: "HiTec",
    techs: ["Next.js"],
    description: "",
    src: `${projectsPath}/hiTec.gif`,
    colorClass: "hitec",
  },
  {
    name: "BAMX",
    techs: ["Next.js"],
    description: "",
    src: `${projectsPath}/bamx.gif`,
    colorClass: "bamx",
  },
  {
    name: "Feedback Channel",
    techs: ["Next.js"],
    description: "",
    src: `${projectsPath}/feedback.gif`,
    colorClass: "feedback",
  },
  {
    name: "Lert",
    techs: ["Next.js"],
    description: "",
    src: `${projectsPath}/lert.gif`,
    colorClass: "lert",
  },
];
