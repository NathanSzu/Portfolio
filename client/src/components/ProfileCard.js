import React from 'react'
import '../App.css'
import ProfilePic from '../assets/Profile.jpg'

export default function ProfileCard() {
    return (
        <div className="card" /*style="width: 18rem;"*/>
            <img className="card-img-top" src={ProfilePic} alt="Nathan Szurek" />
            <div className="card-body pb-0">
                <p className="card-text">Full-stack Developer with a MERN stack development skill set and a passion for creating and learning.</p>
            </div>
            <div className="row center-wrapper">
                <div className="col-xs-6 p-3">
                    <a className="professional-link" href="https://drive.google.com/file/d/1xM-mLSowozpNPUQYFYXsG3uyMfo1xO6O/view?usp=sharing" target="_blank">Resume</a>
                </div>
                <div className="col-xs-6 p-3">
                    <a className="professional-link" href="https://www.linkedin.com/in/nathanszurek" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}
