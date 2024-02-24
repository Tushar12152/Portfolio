import Container from "../Shared/Container";
import Title from "../Shared/Title";


const Skills = () => {
    const skills = [
        {id:1, name: 'ReactJS', img:'https://i.ibb.co/ZSpkMC7/download.png',animate:"fade-right" },
        {id:2, name: 'Javascript', img:'https://i.ibb.co/ydB1JbC/download.jpg',animate:"fade-right"  },
        {id:3, name: 'Firebase',img:'https://i.ibb.co/qnsJvbQ/download.png',animate:"fade-right"  },
        {id:4, name: 'HTML5', img:'https://i.ibb.co/MNX9LQK/download.png',animate:"fade-right"  },
        {id:5, name: 'CSS3', img:'https://i.ibb.co/Nxm8Q8w/download.png',animate:"fade-right" },
        {id:6, name: 'TailWind', img:'https://i.ibb.co/Mc5tq1T/download.jpg',animate:"fade-left" },
        {id:7, name: 'Bootstrap',img:'https://i.ibb.co/nzwx4TF/download.jpg',animate:"fade-left" },
        {id:8, name: 'expressJS',img:'https://i.ibb.co/d0QX9cN/download.png',animate:"fade-left"  },
        {id:9, name: 'nodeJS', img:'https://i.ibb.co/BNRKqRB/download.png',animate:"fade-left"  },
        {id:10, name: 'MongoDB',img:'https://i.ibb.co/hydPk3m/download.png',animate:"fade-left"  },
        
    ];

    return (
        <div className="py-20 bg-black">


           <Container>
           <Title heading={'My Skills'}></Title>
           <div className=" grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-5 mt-20 px-4">
               
              {
                skills.map(skill=><div key={skill.id}>
                     <div  data-aos= {skill?.animate}
                           data-aos-duration="3000"
                           className="w-full shadow-lg shadow-[#f8f83ce1] rounded-xl overflow-hidden"
                          >
                          <img className="w-full h-[150px] rounded-xl  transform hover:scale-110 transition-transform duration-300  object-cover hover:cursor-pointer p-1" src={skill?.img} alt="" />
                          <h1 className="text-white text-center   font-medium ">{skill.name}</h1>
                     </div>
                </div>)
              }
              
           </div>
           </Container>
        </div>
    );
};

export default Skills;
