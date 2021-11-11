import React from "react";
import './../styles/Master.css';
import './../styles/About.css';
import './../styles/Fonts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJsSquare, faHtml5, faCss3Alt, faJava, faAngular} from '@fortawesome/free-brands-svg-icons'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap'
import { IoLogoIonic } from 'react-icons/io';

export default function About() {
    return (
        <div id="About" className="AboutPage">
            <div className="aboutCentered">

                <div className="subAboutContainer">
                    <h1 className="CategoryFont">ABOUT</h1>
                    <div className="subChild">
                        <div className="aboutBlurb">
                            <h1 className="aboutText">Hi, I'm Kati!</h1>
                            <p className="aboutText">I’m a software engineer with an interest in web, mobile, and game development. I recently graduated from UC Irvine with a bachelor’s in Software Engineering, where I picked up my skills in programming, project management, and product design.</p>
                            <p className="aboutText">The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for software engineering, and it’s easy to get me rambling about some new big and bright idea that I just can’t wait to develop. I’m definitely always ready to learn and discover something new.</p>
                            <p className="aboutText">In my free time, I greatly enjoy creative writing and digital art, even going as far as to bind my own books. It’s one of my dreams to create my own hit game one day, combining all my skills and interested into one complete package. </p>
                            <p className="aboutText">If you're wondering about the space theme, I just think it's cute.</p>
                            <div className="aboutButton">
                                <a href="#Projects" className="buttonAbt">SEE MY PROJECTS</a>
                            </div>

                        </div>
                        <div className="aboutBlurb">
                            <h1 className="aboutSubHeader">SKILLS</h1>

                            <Table striped bordered hover className="skillTable">
                                <tr>
                                    <td><FontAwesomeIcon className="abtIcon" icon={faPython} />
                                        <p className="aboutIconText">Python</p>
                                    </td>
                                    <td><FontAwesomeIcon className="abtIcon" icon={faJsSquare} />
                                        <p className="aboutIconText">Javascript</p>
                                    </td>
                                    <td><p className="csharpText">C#</p>
                                        <p className="aboutIconText">C-Sharp</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><FontAwesomeIcon className="abtIcon" icon={faHtml5} />
                                        <p className="aboutIconText">HTML5</p>
                                    </td>
                                    <td><FontAwesomeIcon className="abtIcon" icon={faCss3Alt} />
                                        <p className="aboutIconText">CSS3</p>
                                    </td>
                                    <td><FontAwesomeIcon className="abtIcon" icon={faDatabase} />
                                        <p className="aboutIconText">SQL</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><FontAwesomeIcon className="abtIcon" icon={faJava} />
                                        <p className="aboutIconText">Java</p>
                                    </td>
                                    <td><FontAwesomeIcon className="abtIcon" icon={faAngular} />
                                        <p className="aboutIconText">Angular</p>
                                    </td>
                                    <td><IoLogoIonic className="abtIcon" />
                                        <p className="aboutIconText">Ionic</p>
                                    </td>
                                </tr>
                            </Table>
                        </div>

                    </div>
                </div>

            </div>
        </div>)
}
