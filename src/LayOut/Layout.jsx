import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "../Componets/Nav";
import Footer from "../Componets/Footer";
import ScrollToTop from "react-scroll-to-top";
// import ScrollRestoration from "../Componets/ScrollRestoration";

const Layout = () => {
    return (
        <div>
             <div className="min-h-screen" >
            

             <Nav/>

             <ScrollRestoration />
             <Outlet/>


             </div>
             <Footer/>

             <div >
             <ScrollToTop smooth />
             </div>
        </div>
    );
};

export default Layout;