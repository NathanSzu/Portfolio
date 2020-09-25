import React from 'react'
import ProfileCard from '../components/ProfileCard'
import dataSet from '../utils/PortfolioInfo'

export default function Home() {
    const languages = dataSet.all.languages
    console.log(languages)

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
