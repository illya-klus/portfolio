import { NavLink } from "react-router";
import { useTranslation } from "../data/hooks/useTranslation";

const Projects = () => {
  const {t} = useTranslation();
  const projectsData = t.projects;

  return (
    <div className="py-12 px-4 sm:px-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
        {projectsData.map((project, index) => (
          <NavLink
            key={index}
            to={"/projects/"+project.name}
            className={`
              group relative overflow-hidden rounded-2xl
              border border-gray-300 md:border-none
              ${index % 2 === 0 ? "md:translate-y-6" : ""}
            `}
          >

            <img
              src={project.mainImg}
              alt={project.name}
              className="
                w-full h-50 sm:h-60 md:h-70
                object-cover
                transition duration-500 ease-out
                group-hover:scale-110
              "
            />

            <div className="p-3 sm:p-4 md:hidden bg-white">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {project.name}
              </h3>
            </div>

            <div
              className="
                hidden md:block
                absolute inset-0
                bg-black/40 backdrop-blur-[2px]
                opacity-0 group-hover:opacity-100
                transition duration-500
              "
            />

            <div
              className="
                hidden md:block
                absolute bottom-6 left-6
                text-white
                translate-y-6 opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
                transition duration-500 ease-out
              "
            >
              <h3 className="text-xl font-semibold tracking-wide">
                {project.name}
              </h3>
              <p className="text-sm opacity-80">View project →</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Projects;