const ProjectInfo = ({ project }: any) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <p className="text-gray-700 leading-relaxed">
        {project.description ||
          "This project demonstrates my ability to build scalable frontend applications with clean UI and good UX practices."}
      </p>

      <div className="flex flex-col gap-3">
        <span className="text-sm text-gray-500 uppercase tracking-wide">
          Live Project
        </span>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-lg font-medium text-blue-600 hover:underline"
        >
          {project.link}
        </a>
      </div>
    </div>
  );
};

export default ProjectInfo;