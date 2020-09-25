import React from 'react'
import '../App.css'
import ProfilePic from '../assets/Profile.jpg'

export default function ProfileCard() {
    return (
        <div class="card" /*style="width: 18rem;"*/>
            <img class="card-img-top" src={ProfilePic} alt="Card image cap" />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}
