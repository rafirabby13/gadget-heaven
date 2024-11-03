import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;