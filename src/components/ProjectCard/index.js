import React from "react";
import { FaGithub } from 'react-icons/fa'
import { AiOutlineExport } from 'react-icons/ai';

const ProjectCard = (props) => {
    const toolsArray = props.tools
    return (
        <div className="card">
                        <span className="light-weight card-title">{props.name}</span>
                        <h6 className="title-type light-weight">{props.type}</h6>
                            <div className="card-image">
                                <a href={props.deployed}><img src={props.image} alt={props.name}/></a>
                            </div>
                            <div className="card-content">
                               <p>{props.description}</p>
                            </div>
                            <div className="card-action">
                                <h6 className="light-weight">Built With:</h6>
                                    <ul>
                                        {toolsArray.map((tool) => (
                                            <li
                                            key={tool.name}>
                                                {tool}
                                                </li>
                                        ))}
                                    </ul>
                            </div>
                            <div className="card-action center">
                                <a href={props.deployed}> <AiOutlineExport /> {props.name}</a>
                                <a href={props.github}> <FaGithub /> GitHub Repo</a>
                            </div>  
        </div>
    )
}

export default ProjectCard;