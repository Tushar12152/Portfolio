import Container from "../Shared/Container";
import Title from "../Shared/Title";

const About = () => {
    return (
        <div className="bg-black pt-20">
           <Container>
           <Title heading={'About Me'}></Title>

              <div className="flex flex-col lg:flex-row pb-20 items-center justify-between">
                    <div className="py-20  "    >
                          <img className="w-64  h-64 border-4 rounded-full p-2 border-[#f8f83ce1]" src={'https://i.ibb.co/mB63nCq/IMG-20191017-010223-764.jpg'} alt="" />
                    </div>
                    <div className="lg:w-[50%] text-white">
                        <h1 className="text-3xl font-bold py-7">Web Application Developer</h1>
                         <p className="text-[12px] ">
                         Hi there! I am Md. Isme Ajam (Tushar), a web application   developer  creating  dynamic, responsive, and user-friendly websites.  I know about JavaScript, React,Tailwind CSS, BootStrap, node js,express js, MongoDb, HTML, CSS. 
                         </p>

                         <h1 className="text-3xl font-bold py-7">Education</h1>
                        



                         <table className="border-collapse border border-[#f8f83ce1]">
    <thead>
        <tr>
            <th className="border-2 border-[#f8f83ce1] lg:py-2 lg:px-4">Degree</th>
            <th className="border-2 border-[#f8f83ce1]  lg:py-2 lg:px-4">Passing Year</th>
            <th className="border-2 border-[#f8f83ce1]  lg:py-2 lg:px-4">Dept.</th>
            
            <th className="border-2 border-[#f8f83ce1]  lg:py-2 lg:px-4">Institute</th>
            <th className="border-2 border-[#f8f83ce1]  lg:py-2 lg:px-4">Result (CGPA)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="border-2 border-[#f8f83ce1]  lg:py-2 lg:px-4">Diploma</td>
            <td className="border-2 border-[#f8f83ce1]  lg:py-2 lg:px-4">2022</td>
            <td className="border-2 border-[#f8f83ce1]  lg:py-2 lg:px-4">CSE</td>
            <td className="border-2 border-[#f8f83ce1]  lg:py-2 lg:px-4">KIPI</td>
            <td className="border-2 border-[#f8f83ce1]  lg:py-2 lg:px-4">3.70</td>
        </tr>
        <tr>
            <td className="border-2 border-[#f8f83ce1] lg:px-4">B.Sc</td>
            <td className="border-2 border-[#f8f83ce1] lg:px-4">2023-present</td>
            <td className="border-2 border-[#f8f83ce1] lg:px-4">CSE</td>
            <td className="border-2 border-[#f8f83ce1] lg:px-4">NUB</td>
            <td className="border-2 border-[#f8f83ce1] lg:px-4">--</td>
        </tr>
      
    </tbody>
</table>


                    </div>
              </div>
           </Container>
        </div>
    );
};

export default About;