import React from "react";
import video from "../assets/Background.mp4"

function BackgroundVid() {
    return (
        <div>
            <div className="video-container">
                <video autoPlay="autoplay" muted loop="loop" className="cover-video">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="overlay">
            </div>
        </div>
    )
}

export default BackgroundVid;