import { Outlet } from "react-router-dom";
import NavBar from "../SharePages/NavBar/NavBar";

const Root = () => {
    return (
        <div className="font-Barlow">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;