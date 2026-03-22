import { useNavigate } from "react-router";

const ProjectHero = ({ project }: any) => {
  const navigate = useNavigate();

  return (
    <div className="relative group overflow-hidden rounded-2xl">
      <img
        src={project.mainImg}
        alt={project.name}
        className="w-full h-75 sm:h-100 object-cover transition duration-700 group-hover:scale-102"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-6 left-6 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
          {project.name}
        </h1>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="
          fixed top-4 left-4 z-20
          sm:absolute
          bg-black text-white
          sm:bg-white/80 sm:text-gray-900 font-semibold
          px-5 py-1 rounded-full
          hover:bg-white transition
        "
      >
        ← Back
      </button>
    </div>
  );
};

export default ProjectHero;