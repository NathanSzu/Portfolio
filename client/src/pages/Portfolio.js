import React from 'react'
import ProfileCard from '../components/ProfileCard'
import dataSet from '../utils/PortfolioInfo'

export default function Portfolio() {
    const projects = dataSet.all.projects
    var keygen = require("keygenerator");

    return (
            <div className="d-flex justify-content-center">
                <div className="jumbotron j-texture col-sm-10 col-md-10 col-lg-8 jumbotron-fluid pt-4 pb-4">
                    <div className="row m-3">
                        <div className="col-md-4">
                            <ProfileCard />
                        </div>
                        <div className="col-md-8">
                            <h1 className="display-4">Portfolio</h1>
                            {projects.map((project) => (
                                    <div className="list-group-item" key={keygen.number()}>
                                        <div>
                                        {project.title}
                                        </div>
                                        <div>
                                        GitHub: <a href={project.github}>{project.github}</a>
                                        </div>
                                        <div>
                                        Project: <a href={project.application}>{project.application}</a>
                                        </div>     
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}