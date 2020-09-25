import React from 'react'
import ProfileCard from '../components/ProfileCard'

export default function Home() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="jumbotron col-md-8 jumbotron-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <ProfileCard />
                        </div>
                        <div className="col-md-8">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
