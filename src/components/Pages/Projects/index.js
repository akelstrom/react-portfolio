import React from 'react';
import CardWrapper from "../../CardWrapper";
import projects from "../../../projects.json";
import ProjectCard from "../../ProjectCard";

const Projects = () => {
const projectList = projects
    return (
        <CardWrapper className="grid-container">
            <h4 className="light-weight">Portfolio</h4>
            <div className="row">
            {
                projectList.map(projects => (
                    <ProjectCard 
                    id={projects.id}
                    key={projects.id}
                    name={projects.name}
                    type={projects.type}
                    image={projects.image}
                    description={projects.description}
                    tools={projects.tools}
                    github={projects.github}
                    deployed={projects.deployed}
                    className="project-card"/>
                ))
            }
            </div>
        </CardWrapper>
    );
    
}

export default Projects;