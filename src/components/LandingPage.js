import './../styles/Stars.scss';
import './../styles/Fonts.css';
import './../styles/Master.css';
import './../styles/LandingPage.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf, faUser } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Resume from './../files/Kati_Tran_Resume_11_10_2021.pdf'

export default function LandingPage() {
    return (
        <div id="LandingPage" className="SubPage">
            <div id="stars-container">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='wave'></div>
            </div>

            <div className="centered">

                <div className="container">
                    <div className="child">
                        <h1 className="TitleFont">KATI TRAN</h1>
                        <p className="BriefIntro">SOFTWARE ENGINEER</p>
                        <div className="socialTable">
                            <div id="social-test">
                                <div className="social">
                                    <a title="@katit1" href="https://www.linkedin.com/in/katit1/"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
                                    <div class="divider"/>
                                    <a title="@kati-tran" href="https://github.com/kati-tran"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                                    <div class="divider"/>
                                    <a title="Portfolio" href="#About"><FontAwesomeIcon className="icon" icon={faUser} /></a>
                                </div>

                            </div>
                        </div>
                        <div className="landingButtons">
                            <div className="divSep1">
                            <a href={Resume} className="buttonLand">RESUME</a>
                            </div>
                            <div className="divSep2">
                            <a href="#Contact" className="buttonLand">CONTACT</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}



