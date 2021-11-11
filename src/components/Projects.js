import React from "react";
import './../styles/Projects.css';
import SubProject from './SubProject.jsx';

export default function Projects() {
    return (<div id="Projects" className="ProjectPage">

        <div className="projectCentered">

            <div className="subProjectContainer">
                <h1 className="CategoryFont">PROJECTS</h1>
                <SubProject></SubProject>
            </div>
        </div>

    </div>)
}
