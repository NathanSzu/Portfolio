import React, { useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import ContactForm from '../components/ContactForm'
import axios from "axios";
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "lala",
        email: "lala@lala.com",
        message: "alalalalaalal"
    });

    const sendEmail =(e) => {
        e.preventDefault();
        axios.post("/send", formData)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
    };

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="jumbotron col-md-8 jumbotron-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <ProfileCard />
                        </div>
                        <div className="col-md-8">
                        <h1 className="display-4">Contact Me</h1>
                            <ContactForm sendEmail={sendEmail} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
