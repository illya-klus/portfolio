import { useEffect, useState } from "react";
import me from "/public/me.jpg";

import { Contacts } from "../widgets/Contacts";
import { useTranslation } from "../data/hooks/useTranslation";


const Info = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  const {t} = useTranslation();

  const roles = [
    t.personal.job,
    "React Developer",
    "Frontend Engineer",
  ];

  const fullText = roles[roleIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const typingSpeed = Math.random() * 80 + 40;
    const deletingSpeed = Math.random() * 40 + 20;

    if (!isDeleting && text.length < fullText.length) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
    } 
    else if (isDeleting && text.length > 0) {
      if (Math.random() < 0.2) {
        setIsGlitching(true);
        timeout = setTimeout(() => {
          setIsGlitching(false);
          setText(fullText.slice(0, text.length - 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length - 1));
        }, deletingSpeed);
      }
    } 
    else {
      timeout = setTimeout(() => {
        if (isDeleting) {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
        setIsDeleting(!isDeleting);
      }, 1200);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, fullText]);

  return (
    <div className="relative py-16 px-4 sm:px-6 overflow-hidden border-0 rounded-xl">
      
      <div className="absolute -top-25 -left-25 w-75 h-75 bg-blue-300 opacity-20 blur-3xl rounded-full" />
        <div className="absolute -bottom-25 -right-25 w-75 h-75 bg-purple-300 opacity-20 blur-3xl rounded-full" />

        <div className="relative flex flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-20">

          <div className="flex flex-col sm:flex-row items-center gap-8">

            <div className="relative">
              <img
                className="
                  w-36 h-36 sm:w-40 sm:h-40
                  rounded-full object-cover
                  shadow-lg
                "
                src={me}
                alt="me"
              />
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20 blur-2xl -z-10" />
            </div>

            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {t.personal.name}
              </h1>

              <p
                className={`
                  text-xl font-medium transition-all duration-150
                  ${isGlitching ? "text-red-500 translate-x-1" : "text-gray-700"}
                `}
              >
                {text}
                <span className="ml-1 animate-pulse">|</span>
              </p>

              <p className="text-sm text-gray-600 max-w-md leading-relaxed">
                {t.personal.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h3 className="text-xl font-semibold text-gray-800 tracking-wide">
              Let’s connect
            </h3>

            <Contacts />
          </div>
      </div>
    </div>
  );
};

export default Info;