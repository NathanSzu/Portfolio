import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    function sendEmail(e) {
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
