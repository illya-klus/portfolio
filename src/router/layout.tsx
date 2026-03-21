import { Outlet } from "react-router-dom";

const Layout = () => {
  return(
    <div>
      <main>
        <Outlet/>
      </main>
      <footer>
        <HireMe/>
      </footer>
    </div>
  );
}
const HireMe = () => {
  return(
    <div></div>
  );
}

export default Layout;