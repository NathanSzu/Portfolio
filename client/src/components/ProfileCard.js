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
            <div className="row pt-2 pr-4 pl-4">
                <div className="col-xs-6 center-wrapper">
                    <a className="professional-link" href="https://drive.google.com/file/d/1CvBVHkN8j189o3BSHW1dGYYs8iKVwDcV/view?usp=sharing" target="_blank">Resume</a>
                </div>
                <div className="col-xs-6 center-wrapper">
                    <a className="professional-link" href="https://www.linkedin.com/in/nathanszurek" target="_blank">LinkedIn</a>
                </div>
            </div>
            <div className="row pt-1 pb-2 pr-4 pl-4">
                <div className="col-xs-6 center-wrapper">
                    <a className="professional-link" href="mailto:nathan.szurek@yahoo.com" target="_blank">Email</a>
                </div>
                <div className="col-xs-6 center-wrapper">
                    <a className="professional-link" href="https://github.com/NathanSzu" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    )
}
