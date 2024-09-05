import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLaout = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLaout;
