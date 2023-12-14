import Container from "../Shared/Container";
import Title from "../Shared/Title";


const Skills = () => {
    const skills = [
        { name: 'ReactJS', percentage: 80 },
        { name: 'Javascript', percentage: 70 },
        { name: 'Firebase', percentage: 70 },
        { name: 'HTML5', percentage: 95 },
        { name: 'CSS3', percentage: 90 },
        { name: 'TailWind', percentage: 85 },
        { name: 'Bootstrap', percentage: 70 },
        { name: 'expressJS', percentage: 60 },
        { name: 'nodeJS', percentage: 60 },
        { name: 'MongoDB', percentage: 60 },
        
    ];

    return (
        <div className="py-20 bg-black">


           <Container>
           <Title heading={'My Skills'}></Title>
           <div className="max-w-4xl mx-auto mt-20 px-4">
               
               {skills.map((skill, index) => (
                   <div key={index} className="flex items-center justify-between  mb-3">
                       <div className="w-32 text-white">{skill.name}</div>
                       <div className="flex-1 h-4 bg-gray-300 rounded-md">
                           <div
                               className="h-full bg-[#f8f83ce1] rounded-md"
                               style={{ width: `${skill.percentage}%` }}
                           ></div>
                       </div>
                       <div className="ml-4 text-white">{skill.percentage}%</div>
                   </div>
               ))}
              
           </div>
           </Container>
        </div>
    );
};

export default Skills;
