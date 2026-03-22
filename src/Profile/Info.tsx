import persomalData from "../data/PersonalData.json";
import me from "/public/me.jpg";

import { Contacts } from "../widgets/Contacts";


const Info = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-20">
      
      <div className="flex flex-col sm:flex-row items-center gap-6"> 
        <img className="w-32 h-32 bg-gray-300 rounded-full shrink-0" src={me} alt="" />

        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900">
            {persomalData.name}
          </h1>
  
          <p className="text-lg font-medium text-gray-800">
            {persomalData.job}
          </p>
  
          <p className="text-sm text-gray-600 max-w-md">
            {persomalData.description}
          </p>
        </div>
      </div>
        
    
      <div className="flex flex-col gap-2 items-center lg:items-start">
          <h3 className="text-2xl font-bold text-gray-800">Contacts</h3>
          <Contacts />
      </div>
      
    </div>
  );
};



export default Info;