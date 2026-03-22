import { useEffect, useState } from "react";
import {
  techColorMap,
  techIconMap,
  techLabelMap,
  techList,
} from "./TechnologiesData";

type TechItemProps = {
  tech: string;
  active: boolean;
};

const TechItem = ({ tech, active }: TechItemProps) => {
  const Icon = techIconMap[tech];
  if (!Icon) return null;

  return (
    <div className="relative flex flex-col items-center p-4 overflow-visible">
      {active && (
  <div
    className={`
      absolute top-1/2 left-1/2
      w-6 sm:w-16 aspect-square
      -translate-x-1/2 -translate-y-1/2
      rounded-full blur-2xl opacity-30
      pointer-events-none
      ${techColorMap[tech].bg}
    `}
  />
)}
      <Icon
        className={`
          w-10 h-10 transition duration-300 z-10
          ${active ? techColorMap[tech].icon : "text-gray-400 scale-100"}
        `}
      />
      <span className="mt-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
        {techLabelMap[tech]}
      </span>
    </div>
  );
};

const Technologies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % techList.length);
    }, 1200); // трохи повільніше виглядає дорожче

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Technologies
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
        {techList.map((tech, index) => (
          <TechItem
            key={tech}
            tech={tech}
            active={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;