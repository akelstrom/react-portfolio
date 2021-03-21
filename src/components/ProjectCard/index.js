import React from "react";

const ProjectCard = (props) => {
    return (
        <div className="card">
                        <span class="card-title">{props.name}</span>
                        <h6 class="title-type">{props.type}</h6>
                            <div class="card-image">
                                <a href={props.deployed}><img src={props.image} alt={props.name}/></a>
                            </div>
                            <div class="card-content">
                               <p>{props.description}</p>
                            </div>
                            <div class="card-action">
                                <h6>Built With:</h6>
                                    <ul>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                        <li>HTML</li>
                                        <li>Tailwind</li>
                                        <li>Node.js</li>
                                        <li>Handlebars.js</li>
                                        <li>NodeMailer</li>
                                        <li>EJS</li>
                                        <li>Express.js</li>
                                        <li>MySQL</li>
                                        <li>Sequelize.js</li>
                                        <li>BCrypt</li>
                                        <li>Heroku</li>
                                        <li>Adobe Illustrator</li>
                                    </ul>
                            </div>
                            <div class="card-action center">
                                <a href="https://fridg3-fri3nd.herokuapp.com/">Fridge Friend</a>
                                <a href="https://github.com/akelstrom/fridge-friend">GitHub Repo</a>
                            </div>  
        </div>
    )
}

export default ProjectCard;