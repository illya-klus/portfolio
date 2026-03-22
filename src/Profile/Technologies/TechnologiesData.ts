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

// 🔥 нова структура
export const techColorMap: Record<string, { icon: string; bg: string }> = {
  react: {
    icon: "text-cyan-400 scale-105 md:scale-110",
    bg: "bg-cyan-400",
  },
  ts: {
    icon: "text-blue-500 scale-105 md:scale-110",
    bg: "bg-blue-500",
  },
  js: {
    icon: "text-yellow-400 scale-105 md:scale-110",
    bg: "bg-yellow-400",
  },
  html: {
    icon: "text-orange-500 scale-105 md:scale-110",
    bg: "bg-orange-500",
  },
  css: {
    icon: "text-blue-400 scale-105 md:scale-110",
    bg: "bg-blue-400",
  },
  git: {
    icon: "text-orange-600 scale-105 md:scale-110",
    bg: "bg-orange-600",
  },
  redux: {
    icon: "text-purple-500 scale-105 md:scale-110",
    bg: "bg-purple-500",
  },
  tailwind: {
    icon: "text-sky-400 scale-105 md:scale-110",
    bg: "bg-sky-400",
  },
  vite: {
    icon: "text-purple-400 scale-105 md:scale-110",
    bg: "bg-purple-400",
  },
  supabase: {
    icon: "text-teal-400 scale-105 md:scale-110",
    bg: "bg-teal-400",
  },
  node: {
    icon: "text-green-500 scale-105 md:scale-110",
    bg: "bg-green-500",
  },
  firebase: {
    icon: "text-yellow-400 scale-105 md:scale-110",
    bg: "bg-yellow-400",
  },
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
