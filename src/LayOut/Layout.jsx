import { Outlet } from "react-router-dom";
import Nav from "../Componets/Nav";

const Layout = () => {
    return (
        <div>
             <Nav/>
             <Outlet/>
             
        </div>
    );
};

export default Layout;