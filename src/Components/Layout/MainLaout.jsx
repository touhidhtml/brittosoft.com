import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLaout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLaout;