import React from 'react'
import ProfileCard from '../components/ProfileCard'
import dataSet from '../utils/PortfolioInfo'

export default function Home() {
    const languages = dataSet.all.languages
    const databases = dataSet.all.database
    const others = dataSet.all.other

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="jumbotron col-md-8 jumbotron-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <ProfileCard />
                        </div>
                        <div className="col-md-8">
                            <h1 className="display-4">About Me</h1>
                            <h2>Languages</h2>
                            <ul className="list-group list-group-horizontal-md justify-content-center">
                                {languages.map((language) => (
                                    <li className="list-group-item">
                                        {language}
                                    </li>
                                ))}
                            </ul>
                            <h2>Database</h2>
                            <ul className="list-group list-group-horizontal-md justify-content-center">
                                {databases.map((database) => (
                                    <li className="list-group-item">
                                        {database}
                                    </li>
                                ))}
                            </ul>
                            <h2>Other</h2>
                            <div className="row">
                                {others.map((other) => (
                                    <div className="list-group-item col-md-3">
                                        {other}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
