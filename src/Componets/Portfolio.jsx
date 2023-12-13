import Container from "../Shared/Container";
import Title from "../Shared/Title";
import { useState } from 'react';
import { FaGithub, FaLink } from "react-icons/fa";

const Portfolio = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            imageUrl: 'https://i.ibb.co/cxGCYmF/Screenshot-4.png',
            githubLink: 'https://github.com/Tushar12152/meal-master-client',
            liveLink: 'https://meal-master-project.web.app/',
            description: 'This web site has a navbar, footer, about us section, contact us section, membership section, and meals category section on the home page. The navbar has some routes: home, upcoming meals, meals join us routes. ',
            title: 'Meal Master Project'
        },
        {
            id: 2,
            imageUrl: 'https://i.ibb.co/JjStTXV/Screenshot-5.png',
            githubLink: 'https://github.com/Tushar12152/job-hunter-client',
            liveLink: 'http://ruthless-family.surge.sh/',
            description: 'Home page has a banner,job by category,about us and contact us section.job by category has 5 routs.all jobs onsite jobs, remote jobs, hybrid jobs and part time jobs. every job card has view detail button.',
            title: 'Job Hunter Project'
        },
        {
            id: 3,
            imageUrl: 'https://i.ibb.co/rsbFs1V/Screenshot-6.png',
            githubLink: 'https://github.com/Tushar12152/tech-electro-client',
            liveLink: 'https://technology-and-electroni-30419.web.app/',
            description: ' when you click up to any kinds of brands you will see thats brands product. six kinds of brands is here.every brands has logo and brands name. when you click here you will redirect in brands product route.',
            title: 'tech-electro Project'
        },
        // Add more project objects as needed
    ];

    return (
        <div className="bg-black py-20">
            <Container>
                <Title heading={'Projects'} />
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

export default Portfolio;
