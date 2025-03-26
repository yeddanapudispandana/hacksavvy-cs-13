import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="w-full h-full relative">
      <Outlet />
    </div>
  );
};

export default AppLayout;
