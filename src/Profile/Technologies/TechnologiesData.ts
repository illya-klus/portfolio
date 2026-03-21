import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";

// Список технологій
export const techList = [
  "react",
  "ts",
  "js",
  "html",
  "css",
  "git",
  "redux",
  "tailwind",
  "vite",
  "supabase",
  "node",
  "firebase",
];

// Мапа іконок
export const techIconMap: Record<string, any> = {
  react: FaReact,
  ts: SiTypescript,
  js: FaJs,
  html: FaHtml5,
  css: FaCss3Alt,
  git: FaGitAlt,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  vite: SiVite,
  supabase: SiSupabase,
  node: FaNodeJs,
  firebase: SiFirebase,
};

// Кольори брендів для hover glow
export const techColorMap: Record<string, string> = {
  react: "group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_10px_#22d3ee]",
  ts: "group-hover:text-blue-500 group-hover:drop-shadow-[0_0_10px_#3b82f6]",
  js: "group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_10px_#facc15]",
  html: "group-hover:text-orange-500 group-hover:drop-shadow-[0_0_10px_#f97316]",
  css: "group-hover:text-blue-400 group-hover:drop-shadow-[0_0_10px_#60a5fa]",
  git: "group-hover:text-orange-600 group-hover:drop-shadow-[0_0_10px_#f97316]",
  redux:
    "group-hover:text-purple-500 group-hover:drop-shadow-[0_0_10px_#a855f7]",
  tailwind:
    "group-hover:text-sky-400 group-hover:drop-shadow-[0_0_10px_#38bdf8]",
  vite: "group-hover:text-purple-400 group-hover:drop-shadow-[0_0_10px_#c084fc]",
  supabase:
    "group-hover:text-teal-400 group-hover:drop-shadow-[0_0_10px_#2dd4bf]",
  node: "group-hover:text-green-500 group-hover:drop-shadow-[0_0_10px_#3fd45d]",
  firebase:
    "group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_10px_#facc15]",
};

export const techLabelMap: Record<string, string> = {
  react: "React",
  ts: "TypeScript",
  js: "JavaScript",
  html: "HTML5",
  css: "CSS3",
  git: "Git",
  redux: "Redux",
  tailwind: "TailwindCSS",
  vite: "Vite",
  supabase: "Supabase",
  node: "Node.js",
  firebase: "Firebase",
};
