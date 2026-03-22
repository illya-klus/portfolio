const ProjectInfo = ({ project }: any) => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 ">
      
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold  uppercase tracking-wider ">
          Description
        </h3>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
          {project.description ||
            "This project demonstrates my ability to build scalable frontend applications with clean UI and good UX practices."}
        </p>
      </div>

      <div className="flex flex-col sm:flex-col gap-2 ">
        <h3 className="text-xl font-bold uppercase tracking-wider ">
          Live Project
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          {project.link}
        </a>
      </div>

    </div>
  );
};

export default ProjectInfo;