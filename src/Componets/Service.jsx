import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import Container from "../Shared/Container";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";

import Title from "../Shared/Title";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="bg-black pt-20 ">
      <Container>
        <Title heading={"Services"}></Title>

        <div
         
        className="mt-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
            
            data-aos="zoom-out-up"
            data-aos-duration="3000"
            
            className="card hover:border-2 border-transparent transition-all duration-1000 ease-linear hover:border-[#f8f83ce1] card-compact w-80 bg-gray-900 shadow-xl ">
              <div className="card-body">
                <div className="flex gap-6 bg-black p-5 rounded-xl ">
                     <p className="text-4xl text-[#f8f83ce1]"><DiMongodb /></p>
                     <p className="text-4xl text-[#f8f83ce1]"><SiExpress /></p>
                     <p className="text-4xl text-[#f8f83ce1]"><FaReact /></p>
                     <p className="text-4xl text-[#f8f83ce1]"><FaNodeJs/></p>
                </div>
                <h2 className="card-title text-white">MERN Stack Development </h2>
                <p className="text-white">MERN stands for MongoDB, Express.js, React.js, and Node.js—a cutting-edge technology stack renowned for its versatility, speed, and flexibility in crafting robust web solutions.

</p>
                <div className="card-actions justify-center mt-5">
                  <Link to={'https://www.facebook.com/TusharImran03'}> <button className="btn bg-[#f8f83ce1]">Get Service</button></Link>
                </div>
              </div>
            </div>


            <div
             data-aos="zoom-out-up"
             data-aos-duration="3000"
            className="card hover:border-2 border-transparent transition-all duration-1000 ease-linear hover:border-[#f8f83ce1] card-compact w-80 bg-gray-900 shadow-xl">
              <div className="card-body">
                <div className="flex gap-6 bg-black p-5 rounded-xl ">
                     <p className="text-4xl text-[#f8f83ce1]"><FaReact /></p>
                     <p className="text-4xl text-[#f8f83ce1]"><TbBrandJavascript />
</p>
                     <p className="text-4xl text-[#f8f83ce1]"><FaHtml5 />
</p>
                     <p className="text-4xl text-[#f8f83ce1]"><SiTailwindcss /></p>
                </div>
                <h2 className="card-title text-white">Frontend Development </h2>
                <p className="text-white">Creating designs optimized for various devices to ensure an exceptional user experience across desktops, tablets, and mobiles.And make user friendly user interface.

</p>
                <div className="card-actions justify-center mt-5">
                  <Link to={'https://www.facebook.com/TusharImran03'}> <button className="btn bg-[#f8f83ce1]">Get Service</button></Link>
                </div>
              </div>
            </div>




            <div
             data-aos="zoom-out-up"
             data-aos-duration="3000"
            
            className="card hover:border-2 border-transparent transition-all duration-1000 ease-linear hover:border-[#f8f83ce1] card-compact w-80 bg-gray-900 shadow-xl">
              <div className="card-body">
                <div className="flex gap-6 bg-black p-5 rounded-xl ">
                     <p className="text-4xl text-[#f8f83ce1]"><DiMongodb /></p>
                     <p className="text-4xl text-[#f8f83ce1]"><SiExpress /></p>
                     <p className="text-4xl text-[#f8f83ce1]"><SiJsonwebtokens />
</p>
                     <p className="text-4xl text-[#f8f83ce1]"><FaNodeJs/></p>
                </div>
                <h2 className="card-title text-white">Backend Development </h2>
                <p className="text-white">Tailored backend development solutions aligned with your unique business requirements and goals.

</p>
                <div className="card-actions justify-center mt-5">
                  <Link to={'https://www.facebook.com/TusharImran03'}> <button className="btn bg-[#f8f83ce1]">Get Service</button></Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
