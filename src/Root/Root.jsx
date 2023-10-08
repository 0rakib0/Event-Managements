import { Outlet } from "react-router-dom";
import NavBar from "../SharePages/NavBar/NavBar";
import Footer from "../SharePages/Footer/Footer";

const Root = () => {
    return (
        <div className="font-Barlow">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;