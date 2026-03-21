import { Outlet } from "react-router-dom";
import { Contacts } from "../widgets/Contacts";



const Layout = () => {
  return(
    <div>

      <main className="flex items-center justify-center pt-20">
        <Outlet/>
      </main>

      <footer className="flex items-center justify-center mt-10">
        
        <div className="flex flex-row gap-6 items-center">
          <h3 className="text-2xl font-bold text-gray-800">Hire me: </h3>
          <Contacts/>
        </div>

      </footer>
    </div>
  );
}


export default Layout;