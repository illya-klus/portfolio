const ProjectExperience = ({ project }: any) => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-300 pb-2">
        What I did
      </h2>

      <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
        {project.expirience.map((item: string, index: number) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectExperience;