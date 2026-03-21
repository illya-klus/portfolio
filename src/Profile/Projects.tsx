import { NavLink } from "react-router";
import projectsData from "../data/Projects.json";

const Projects = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <NavLink
            key={index}
            to={project.name}
            className="flex flex-col items-center rounded-2xl overflow-hidden cursor-pointer border border-gray-400"
          >
            <img
              src={project.mainImg}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <span className="py-3 text-lg font-medium text-gray-900">
              {project.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Projects;