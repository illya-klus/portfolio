import { useParams, Navigate } from "react-router-dom";
import projectsData from "../data/english/Projects.json";
import ProjectHero from "./ProjectHero";
import ProjectInfo from "./ProjectInfo";
import ProjectExperience from "./ProjectExperience";
import ProjectGallery from "./ProjectGallery";

// Тип для проекту
interface Project {
  name: string;
  mainImg: string;
  link?: string;
  description?: string;
  expirience?: string[];
  images?: string[];
}

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>(); // id = name проекту з URL

  // Знаходимо проект по name
  const project: Project | undefined = projectsData.find(
    (p) => p.name.toLowerCase() === id?.toLowerCase()
  );

  // Якщо не знайдено, можна редиректнути на сторінку з проектами
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
      <ProjectHero project={project} />
      <ProjectInfo project={project} />
      <ProjectExperience project={project} />
      <ProjectGallery project={project} />
    </div>
  );
};

export default ProjectPage;