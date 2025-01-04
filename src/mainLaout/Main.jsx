import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
