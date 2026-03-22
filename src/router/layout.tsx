import { Outlet } from "react-router-dom";
import { Contacts } from "../widgets/Contacts";
import LanguageToggle from "../widgets/lenguageToggle";

const Layout = () => {
  return (
    <div className="relative min-h-screen">

      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
      </div>

      <main className="flex items-center justify-center py-8 px-4">
        <div className="max-w-7xl">
          <Outlet />
        </div>
      </main>

      <footer className="flex items-center justify-center py-8 px-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Hire me:</h3>
          <Contacts />
        </div>
      </footer>
    </div>
  );
};

export default Layout;