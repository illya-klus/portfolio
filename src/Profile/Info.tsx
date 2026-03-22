import persomalData from "../data/PersonalData.json";
import me from "/public/me.jpg";

import { Contacts } from "../widgets/Contacts";

const Info = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 overflow-hidden">
      
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
              {persomalData.name}
            </h1>

            <p className="text-xl text-gray-700">
              {persomalData.job}
            </p>

            <p className="text-sm text-gray-600 max-w-md leading-relaxed">
              {persomalData.description}
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