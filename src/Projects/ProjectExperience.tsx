const ProjectExperience = ({ project }: any) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        What I did
      </h2>

      <ul className="grid sm:grid-cols-2 gap-4">
        {project.expirience.map((item: string, index: number) => (
          <li
            key={index}
            className="
              text-sm text-gray-700
              p-4 rounded-xl
              bg-gray-50
              hover:bg-gray-100
              transition
            "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectExperience;