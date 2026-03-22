import { techColorMap, techIconMap, techLabelMap, techList } from "./TechnologiesData";


type TechItemProps = {
  tech: string;
};
const TechItem = ({ tech }: TechItemProps) => {
  const Icon = techIconMap[tech];
  if (!Icon) return null;

  return (
    <div className="group flex flex-col items-center p-2 rounded-2xl transition duration-300 cursor-default">
      <Icon className={`w-10 h-10 text-gray-800 transition duration-300 ${techColorMap[tech]}`} />
      <span className="mt-2 text-xs sm:text-sm text-gray-900 font-medium text-center">
        {techLabelMap[tech]}
      </span>
    </div>
  );
};

const Tecnologies = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies</h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-12  gap-6">
        {techList.map((tech) => (
          <TechItem key={tech} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default Tecnologies;











