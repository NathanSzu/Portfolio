import React from 'react'
import '../App.css'
import ProfilePic from '../assets/Profile.jpg'

export default function ProfileCard() {
    return (
        <div class="card" /*style="width: 18rem;"*/>
            <img class="card-img-top" src={ProfilePic} alt="Card image cap" />
            <div class="card-body">
                <p class="card-text">Front End Developer with a MERN stack development skill set and a passion for creating and learning.</p>
            </div>
        </div>
    )
}
