import { useState, useEffect } from "react";

const ProjectGallery = ({ project }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const total = project.images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      // спочатку зникаємо
      setFade(false);

      setTimeout(() => {
        // потім змінюємо індекс і знову з'являємо
        setCurrentIndex((prev) => (prev + 1) % total);
        setFade(true);
      }, 700); 
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="relative py-6">
      <h2 className="text-3xl font-bold mb-6">Preview</h2>

      <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center">
        <img
          src={project.images[currentIndex]}
          alt={`Preview ${currentIndex + 1}`}
          className={`h-64 md:h-80 object-cover rounded-xl shadow-lg transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {total}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;