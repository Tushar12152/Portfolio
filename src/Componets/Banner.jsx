import Container from "../Shared/Container";
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";







const Banner = () => {








    return (
        <div className=" bg-black " >
               <Container>
                     <div  className="flex flex-col lg:flex-row items-center justify-between">
                          <div className="text-white lg:w-[50%]">
                            {/* left side text */}
                            <h2 className="text-3xl font-bold pt-20 py-4"> Hello, I am</h2>
                            <h1 className="text-3xl font-bold py-2">Md.Isme Ajam (Tushar)</h1> 
                            <h2 className="text-2xl font-bold py-4"> And I am a <TypeAnimation className="text-[#f8f83ce1]"
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'MERN Stack Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Developer',
        2000,
        'Web Developer',
        2000,
        'React Developer',
        2000,

      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    /></h2>
                            <p className="text-sm ">Expertise in MongoDB, Express.js, React.js, and Node.js allows me to craft seamless, interactive experiences that breathe life into ideas. From concept to execution, I thrive on turning visions into reality.</p>

                            <div className="flex gap-6 mt-10">
                           


                            <Link  className="border-2 p-2 rounded-full border-[#f8f83ce1] text-2xl hover:bg-[#f8f83ce1]  " to={'https://www.facebook.com/TusharImran03'}> <FaFacebookF className="hover:text-black" /> </Link>

                            <Link className="border-2 p-2 rounded-full border-[#f8f83ce1] text-2xl  hover:bg-[#f8f83ce1]" to={'https://github.com/Tushar12152'}><FaGithub className="hover:text-black" /></Link>

                            <Link className="border-2 p-2 rounded-full border-[#f8f83ce1] text-2xl hover:bg-[#f8f83ce1]" to={'https://www.linkedin.com/in/md-isme-ajam-tushar-038504291/'}><FaLinkedinIn className="hover:text-black" /></Link>





                            </div>

                            

                          </div>
                          <div className="my-28 ">
                             {/* right side image */}
                        <img className="w-60 rounded-full border-4 p-5  animate-bounce hover:animate-pulse h-60" src={'https://i.ibb.co/0DScbxF/Screenshot-3.png'} alt="" />

                          </div>
                     </div>
               </Container>





             






        </div>
    );
};

export default Banner;