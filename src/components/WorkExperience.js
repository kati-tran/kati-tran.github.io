import React, { useState } from "react";
import './../styles/WorkExp.css';
import Fan360 from './../files/Fan360 Presentation.pdf';
import PatientZero from './../images/patientZero.JPG';

export default function WorkExperience() {
    const [activeTab, setActiveTab] = useState("tab1");
    let tabs = <p>Loading...</p>;
    if (activeTab === "tab1") {
        tabs = <div className="workBlurb">
            <h1 className="projectTech">Fugu Corporation</h1>
            <h3 className="aboutText removePaddingAndMargin">Full-Stack Software Developer</h3>
            <h4 className="aboutText removePaddingAndMargin">(Jan 2021 - Present)</h4>
            <ul className="workExpList">
                <li className="aboutText">Developing with ASP.NET/C#, HTML, and JavaScript using MS Visual Studio and MS SQL to build E-learning
                    web applications and deploying code to multiple production servers accessed by over 400,000 users per day.</li>
                <li className="aboutText">Responsible for creating, using, and maintaining hundreds of CRUD stored procedures, transitioning dated business logic using standard SQL connections with ADO to instead organized data transformation objects, tiered architecture, and the repository pattern.</li>
                <li className="aboutText">Error-checking, rewriting, and refactoring code up to a decade in age, speeding up load times and preventing destructive bugs.</li>
                <li className="aboutText">Creating web applications and components with Blazor framework and SignalR for weekly virtual live shows and video production including a live chat, polling system, Q&A system, and teleprompter tools to maximize participation for the hosts and the viewers.</li>
                <li className="aboutText">Programming dozens of custom tool managers for both clients and in-house employees and improving business performance with the creation of various administrator pages used for sales, products, ad campaigns, coupons/access codes, and education management.</li>
            </ul>
        </div>
    } else if (activeTab === "tab2") {
        tabs = <div className="workBlurb">
            <h1 className="projectTech">Paciolan</h1>
            <h3 className="aboutText removePaddingAndMargin">Mobile Software Engineer Intern</h3>
            <h4 className="aboutText removePaddingAndMargin">(Oct 2020 - March 2021)</h4>
            <ul className="workExpList">
                <li className="aboutText">iOS developer and designer for a celebrity interaction app, Fan360, using Swift programming language, SwiftUI library, and Google Firebase for a senior capstone project.</li>
                <li className="aboutText">Implemented a live chatting system and dynamic/responsive pages by communicating with Cloud Firestore.</li>
                <li className="aboutText">Collaborated with a small team using Atlassian tools, such as Confluence and Jira, with Gitlab for source control and repository management.</li>
                <li className="aboutText">Coordinated weekly with clients to discuss the design process, development process, and requirements engineering documents with roadmaps and SCRUM planning.</li>
                <li className="aboutText">Distributed Fan360 using Apple TestFlight to beta-test, approve, and potentially launch in the official AppStore</li>
            </ul>

            <div className="aboutButton">
                <a href={Fan360} Title="Unfortunately without animations." className="buttonAbt">SEE THE PITCH</a>
            </div>

        </div>
    } else if (activeTab === "tab3") {
        tabs = <div className="workBlurb">
            <h1 className="projectTech">Patient Zero</h1>
            <h3 className="aboutText removePaddingAndMargin">Student Game Developer</h3>
            <h4 className="aboutText removePaddingAndMargin">(Oct 2020 - Dec 2020)</h4>
            <ul className="workExpList">
                <li className="aboutText">Used C# and the Unity3D to develop new features and fine-tune the quality of code for Patient Zero, a VR
                    Bio-Educational game teaching lab techniques and basic biology concepts.
                </li>
                <li className="aboutText">Collaborated with a team of thirty scientists, designers, artists, and programmers.
                </li>
            </ul>

            <div className="aboutButton">
                <a href="https://hughesmedia.bio.uci.edu/patient-zero/" target="_blank" className="buttonAbt">LEARN MORE</a>
            </div>

        </div>;
    }
    return (
        <div id="WorkExperience" className="ProjectPage">

            <div className="projectCentered">

                <div className="subProjectContainer">
                    <h1 className="CategoryFont">EXPERIENCE</h1>
                    <div className="Tabs">
                        <div className="nav">
                            <a
                                className={activeTab === "tab1" ? "active" : ""}
                                onClick={() => setActiveTab("tab1")}>
                                FUGU CORP.
                            </a>
                            <a
                                className={activeTab === "tab2" ? "active" : ""}
                                onClick={() => setActiveTab("tab2")}>
                                PACIOLAN
                            </a>
                            <a
                                className={activeTab === "tab3" ? "active" : ""}
                                onClick={() => setActiveTab("tab3")}>
                                PATIENT ZERO
                            </a>
                        </div>
                        <div className="outlet">
                            <div className="projectContainer">
                                {tabs}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
