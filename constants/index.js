const projectsPath = "/projects";

export const colorVariants = {
  pixelu: {
    selected: "text-indigo-600",
    unselected: "group-hover:text-indigo-600",
    background: "bg-indigo-600",
  },
  enigma: {
    selected: "text-rose-600",
    unselected: "group-hover:text-rose-600",
    background: "bg-rose-600",
  },
  studya: {
    selected: "text-sky-900",
    unselected: "group-hover:text-sky-900",
    background: "bg-sky-900",
  },
  hitec: {
    selected: "text-sky-600",
    unselected: "group-hover:text-sky-600",
    background: "bg-sky-600",
  },
  bamx: {
    selected: "text-rose-600",
    unselected: "group-hover:text-rose-600",
    background: "bg-rose-600",
  },
  feedback: {
    selected: "text-violet-500",
    unselected: "group-hover:text-violet-500",
    background: "bg-violet-500",
  },
  lert: {
    selected: "text-blue-600",
    unselected: "group-hover:text-blue-600",
    background: "bg-blue-600",
  },
};

export const projects = [
  {
    name: "Pixelu Studio",
    techs: ["Next.js", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
    description:
      "Landing page of my digital design & software development studio.",
    src: `${projectsPath}/pixelu.gif`,
    colorClass: "pixelu",
  },
  {
    name: "Enigma",
    techs: ["Next.js", "Tailwind CSS", "Firebase", "Stripe", "UI/UX Design"],
    description: "E-commerce platform to purchase event tickets.",
    src: `${projectsPath}/enigma.gif`,
    colorClass: "enigma",
  },
  {
    name: "Studya",
    techs: ["Figma", "UI/UX Design"],
    description: "Online platform to find and compare academic options.",
    src: `${projectsPath}/studya.gif`,
    colorClass: "studya",
  },
  {
    name: "HiTec",
    techs: ["React.js", "Firebase", "UI/UX Design"],
    description:
      "Official site of the event for new students of Tec de Monterrey.",
    src: `${projectsPath}/hiTec.gif`,
    colorClass: "hitec",
  },
  {
    name: "BAMX",
    techs: ["Swift", "Firebase", "UI/UX Design"],
    description:
      "iOS Mobile App to schedule and make donations with rewards system.",
    src: `${projectsPath}/bamx.gif`,
    colorClass: "bamx",
  },
  {
    name: "Feedback Channel",
    techs: ["React.js", "Node.js", "Mongo DB", "Express", "UI/UX Design"],
    description:
      "Web App to track complaints and suggestions within the company.",
    src: `${projectsPath}/feedback.gif`,
    colorClass: "feedback",
  },
  {
    name: "Lert",
    techs: ["React.js", "Redux", "Material UI", "Flask", "UI/UX Design"],
    description: "Labor Expenses Recovery Tool (Web App).",
    src: `${projectsPath}/lert.gif`,
    colorClass: "lert",
  },
];
