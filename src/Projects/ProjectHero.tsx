const ProjectHero = ({ project }: any) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
      <img
        src={project.mainImg}
        alt={project.name}
        className="w-full h-75 sm:h-100 object-cover transition duration-700 group-hover:scale-105"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* text */}
      <div className="absolute bottom-6 left-6 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
          {project.name}
        </h1>
      </div>
    </div>
  );
};

export default ProjectHero;