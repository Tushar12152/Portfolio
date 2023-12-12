import { NavLink } from "react-router-dom";
import Container from "../Shared/Container";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDfFile from "./PDFFile";
// import { HashLink } from "react-router-hash-link";

const Nav = () => {


    const nav=<div  className="flex flex-col lg:flex-row gap-6 text-md lg:items-center">
            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#d1ea45e1]  underline   " : ""}>Home</NavLink>

            <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#d1ea45e1] underline   " : ""}>About </NavLink>


            <NavLink to="/skill" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#d1ea45e1] underline   " : ""}>Skills</NavLink>
            



            <NavLink to="/service" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#d1ea45e1] underline   " : ""}>Service</NavLink>

            <NavLink to="/project" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#d1ea45e1] underline   " : ""}>Portfolio</NavLink>

            <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " text-[#d1ea45e1] underline   " : ""}>Contact</NavLink>

           

    </div>


    return (
       <div className="bg-black ">
         
           <Container>
           <div className="navbar bg-black text-[#f8f83ce1] fixed   z-10 bg-opacity-30 w-[90%] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black  rounded-box w-52">
       {nav}
      </ul>
    </div>
    <a  className=" font-bold text-xl">Portfolio</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {nav}
    </ul>
  </div>
  <div className="navbar-end">

{/* <PDFDownloadLink document={<PDfFile/>} fileName="Md Isme Ajam resume">
<button className="btn bg-[#f8f83ce1]">Download Resume</button>
</PDFDownloadLink> */}



<PDFDownloadLink document={<PDfFile />} fileName="Md_Isme_Ajam_Resume.pdf">
      {() => (
        (
          <button className="btn bg-[#f8f83ce1]">Download Resume</button>
        )
      )}
    </PDFDownloadLink>


    
  </div>
</div>
           </Container>
        
       </div>
    );
};

export default Nav;