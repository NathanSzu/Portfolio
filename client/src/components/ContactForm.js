import React, { useState } from "react";
import axios from "axios";


function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function sendEmail(e) {
        e.preventDefault();
        axios.post("/send", formData)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(err => {console.log(err)})
    };

    function handleNameChange(e) {
        setFormData({ ...formData, name: e.target.value })
    };

    function handleEmailChange(e) {
        setFormData({ ...formData, email: e.target.value })
    };

    function handleMessageChange(e) {
        setFormData({ ...formData, message: e.target.value })
    };

    return (
        <form>
            <div className="form-group">
                {/* Name input */}
                <label htmlFor="name">Name</label>
                <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleNameChange}
                ></input>
                <br />
                {/* Email input */}
                <label htmlFor="email">Email</label>
                <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleEmailChange}
                ></input>
                <br />
                {/* Message input */}
                <label htmlFor="message">Message</label>
                <textarea
                    className="form-control"
                    rows="4"
                    id="message"
                    name="message"
                    onChange={handleMessageChange}
                ></textarea>
                {/* Submit button */}
                <button
                    className="btn btn-primary"
                    type="submit"
                    value="Send Message"
                    onClick={sendEmail}
                >Send Message</button>
            </div>
        </form>
    )
}


export default ContactForm;