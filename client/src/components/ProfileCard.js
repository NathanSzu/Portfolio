import React from 'react'
import '../App.css'
import ProfilePic from '../assets/Profile.jpg'

export default function ProfileCard() {
    return (
        <div className="card" /*style="width: 18rem;"*/>
            <img className="card-img-top" src={ProfilePic} alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">Front End Developer with a MERN stack development skill set and a passion for creating and learning.</p>
            </div>
        </div>
    )
}
