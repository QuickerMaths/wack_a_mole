import Header from "../Header/Header";
import { Outlet } from "react-router";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
