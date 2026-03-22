import { Outlet } from "react-router-dom";
import { Contacts } from "../widgets/Contacts";



const Layout = () => {
  return(
    <div>

      <main className="flex items-center justify-center py-8 px-4">
        <div className="max-w-320">
          <Outlet/>
        </div>
      </main>

      <footer className="flex items-center justify-center py-8 px-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Hire me:</h3>
          <Contacts/>
        </div>
      </footer>
    </div>
  );
}


export default Layout;