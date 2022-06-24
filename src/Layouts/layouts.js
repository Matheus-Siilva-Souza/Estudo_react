import "../components/menu";
import MiniDrawer from "../components/menu"
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <>
      <MiniDrawer />
      <Outlet />
    </>
  );
}



export default Layout;