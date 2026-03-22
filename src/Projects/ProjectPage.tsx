import projects from "../data/Projects.json";
import ProjectHero from "./ProjectHero";
import ProjectInfo from "./ProjectInfo";
import ProjectExperience from "./ProjectExperience";
import ProjectGallery from "./ProjectGallery";

const ProjectPage = () => {
  const project = projects[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 gap-12">
      <ProjectHero project={project} />
      <ProjectInfo project={project} />
      <ProjectExperience project={project} />
      <ProjectGallery project={project} />
    </div>
  );
};

export default ProjectPage;