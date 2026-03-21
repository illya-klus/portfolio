import { Outlet } from "react-router-dom";
import { Contacts } from "../widgets/Contacts";



const Layout = () => {
  return(
    <div>

      <main>
        <Outlet/>
      </main>

      <footer className="flex items-center justify-center">
        
        <div className="flex flex-row gap-6 items-center">
          <h3 className="text-2xl font-bold text-gray-800">Hire me: </h3>
          <Contacts/>
        </div>

      </footer>
    </div>
  );
}


export default Layout;