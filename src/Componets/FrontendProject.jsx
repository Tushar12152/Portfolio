import Container from "../Shared/Container";
import Title from "../Shared/Title";
import { useState } from 'react';
import { FaGithub, FaLink } from "react-icons/fa";

const FrontendProject = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            imageUrl: 'https://i.ibb.co/X42wZKf/screencapture-tight-bead-surge-sh-2024-02-26-20-39-01.png',
            githubLink: 'https://github.com/Tushar12152/Digital-Agency-UI',
            liveLink: 'https://tight-bead.surge.sh/',
            description: 'This is UI design just , not have any interactivity ',
            title: 'Digital Agency'
        },
        {
            id: 2,
            imageUrl: 'https://i.ibb.co/X42wZKf/screencapture-tight-bead-surge-sh-2024-02-26-20-39-01.png',
            githubLink: 'https://github.com/Tushar12152/Digital-Agency-UI',
            liveLink: 'https://tight-bead.surge.sh/',
            description: 'This is UI design just , not have any interactivity ',
            title: 'Digital Agency'
        },
        {
            id: 3,
            imageUrl: 'https://i.ibb.co/X42wZKf/screencapture-tight-bead-surge-sh-2024-02-26-20-39-01.png',
            githubLink: 'https://github.com/Tushar12152/Digital-Agency-UI',
            liveLink: 'https://tight-bead.surge.sh/',
            description: 'This is UI design just , not have any interactivity ',
            title: 'Digital Agency'
        },
        
        // Add more project objects as needed
    ];

    return (
        <div className="bg-black py-20">
            <Container>
                <Title heading={'Frontend Designs'} />
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div

                        data-aos="zoom-out-up"
                        data-aos-duration="3000"
                        
                            key={project.id}
                            className="bg-cover bg-center w-80 h-96 relative cursor-pointer transition duration-2000 ease-linear rounded-xl"
                            style={{
                                backgroundImage: `url(${project.imageUrl})`,
                            }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {hoveredProject === project.id && (
                                <div className="text-white text-center absolute inset-0 flex flex-col items-center justify-center border-4 border-[#f8f83ce1] bg-black w-[70%] h-[90%] mt-5  mx-auto shadow-2xl rounded-2xl overflow-hidden">
                                    <h1 className="text-xl font-bold">{project.title}</h1>
                                    <p className="text-sm p-4">{project.description}</p>
                                    <div className="flex gap-6 mt-5">
                                        <a href={project.githubLink} className="text-2xl rounded-full text-black bg-[#f8f83ce1] p-2">
                                            <FaGithub />
                                        </a>
                                        <a href={project.liveLink} className="text-2xl rounded-full text-black bg-[#f8f83ce1] p-2">
                                            <FaLink />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default FrontendProject;
