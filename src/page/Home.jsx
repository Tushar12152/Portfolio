import About from "../Componets/About";
import Banner from "../Componets/Banner";
import Contact from "../Componets/Contact";
import Portfolio from "../Componets/Portfolio";
import Service from "../Componets/Service";
import Skills from "../Componets/Skil";

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <About></About>
<Skills/>

             <Service/>
             <Portfolio/>
             <Contact/>
        </div>
    );
};

export default Home;