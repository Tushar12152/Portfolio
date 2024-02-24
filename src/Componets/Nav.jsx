import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";

import Container from "../Shared/Container";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDfFile from "./PDFFile";
// import { HashLink } from "react-router-hash-link";

const Nav = () => {


    const nav=<div  className="flex flex-col lg:flex-row gap-6 text-md lg:items-center">
            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  lg:text-[#d1ea45e1]  underline   " : "text-white"}>Home</NavLink>

            <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " lg:text-[#d1ea45e1] underline   " : "text-white"}>About </NavLink>


            <NavLink to="/skill" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " lg:text-[#d1ea45e1] underline   " : "text-white"}>Skills</NavLink>
            



            <NavLink to="/service" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " lg:text-[#d1ea45e1] underline   " : "text-white"}>Service</NavLink>

            <NavLink to="/project" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " lg:text-[#d1ea45e1] underline   " : "text-white"}>Portfolio</NavLink>

            <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? " lg:text-[#d1ea45e1] underline   " : "text-white"}>Contact</NavLink>

           

    </div>


    return (
       <div className="bg-black ">
         
           <Container>
           <div className="navbar bg-black text-[#f8f83ce1] fixed   z-10 bg-opacity-30 w-[90%] lg:mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 pl-10 shadow bg-white bg-opacity-80 text-black  rounded-box w-52">
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

<PDFDownloadLink document={<PDfFile/>} fileName="Md Isme Ajam resume">
<button className="btn-sm rounded-md hover:bg-white text-black bg-[#f8f83ce1]"> <div className="flex items-center gap-2">
<FaDownload />  Download Resume
  </div></button>
</PDFDownloadLink>



{/* <PDFDownloadLink document={<PDfFile />} fileName="Md_Isme_Ajam_Resume.pdf">
      {() => (
        (
          <button className="btn bg-[#f8f83ce1]">Download Resume</button>
        )
      )}
    </PDFDownloadLink> */}


    
  </div>
</div>
           </Container>
        
       </div>
    );
};

export default Nav;