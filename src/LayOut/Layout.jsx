import { Outlet } from "react-router-dom";
import Nav from "../Componets/Nav";
import Footer from "../Componets/Footer";

const Layout = () => {
    return (
        <div>
             <div className="min-h-screen">
             <Nav/>
             <Outlet/>
             </div>
             <Footer/>
        </div>
    );
};

export default Layout;