import React from 'react'
import ProfileCard from '../components/ProfileCard'
import dataSet from '../utils/PortfolioInfo'

export default function Portfolio() {
    const projects = dataSet.all.projects
    var keygen = require("keygenerator");

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="jumbotron col-md-8 jumbotron-fluid">
                    <div className="row">
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
        </div>
    )
}