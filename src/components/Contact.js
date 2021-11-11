import React from "react";
import './../styles/Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf, faUser } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Resume from './../files/Kati_Tran_Resume_11_10_2021.pdf'

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "form", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (<div id="Contact" className="ProjectPage">
        <div className="projectCentered">
            <div className="subContactContainer">
                <h1 className="CategoryFont">Contact Me</h1>
                <p className="contactFormEmail">KATI.TRAN1@GMAIL.COM</p>
                <div className="contactButtons">
                    <div className="divSep1">
                        <a title="@katit1" href="https://www.linkedin.com/in/katit1/" className="buttonContact">LINKEDIN</a>
                    </div>
                    <div className="divSep1">
                        <a title="@kati-tran" href="https://github.com/kati-tran" className="buttonContact">GITHUB</a>
                    </div>
                    <div className="divSep1">
                        <a href={Resume} className="buttonContact">RESUME</a>
                    </div>
                    <div className="divSep1">
                        <a href="mailto: kati.tran1@gmail.com" className="buttonContact">EMAIL</a>
                    </div>
                </div>

                {/*
        <form id="form" class="topBefore" onSubmit={handleSubmit}>

            <input id="name" type="text" placeholder="NAME" onChange={(e) => setName(e.target.value)} />
            <input id="email" type="text" placeholder="E-MAIL" onChange={(e) => setEmail(e.target.value)} />
            <textarea id="message" type="text" placeholder="MESSAGE" onChange={(e) => setMessage(e.target.value)} ></textarea>
            <input id="submit" type="submit" value="GO!" />

        </form>
    */}
            </div>
        </div>
    </div>)
}
