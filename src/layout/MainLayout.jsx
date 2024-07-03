import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";
import Footer from "../component/Footer";


const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;