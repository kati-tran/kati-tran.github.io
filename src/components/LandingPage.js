import logo from '../logo.svg';
import './../styles/Stars.scss';
import './../styles/Fonts.css';
import React from "react";

export default function LandingPage() {
    return (
        <div className="SubPage">
            <div id="stars-container">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
            <div className="centered">
                <div className="container">
                    <div className="child"><h1 className="TitleFont">KATI TRAN</h1>
                <p className="BriefIntro">SOFTWARE ENGINEER</p></div>
                
                </div>
            </div>
        </div>
    )
}
