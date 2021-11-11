import './styles/Stars.scss';
import './styles/Master.css';
import './styles/NavBar.scss';

import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";

function App() {
  
  return (
    <main className="Background">
      <input type="checkbox" id="menyAvPaa" />
      <label id="burger" for="menyAvPaa">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <nav id="meny">
        <ul className="menu__list">
          <li className="menu__item"><a className="menu__link" href="#LandingPage">Home</a></li>
          <li className="menu__item"><a className="menu__link" href="#About">About Me</a></li>
          <li className="menu__item"><a className="menu__link" href="#Projects">Projects</a></li>
          <li className="menu__item"><a className="menu__link" href="#">Work Experience</a></li>
          <li className="menu__item"><a className="menu__link" href="#Contact">Contact</a></li>
        </ul>
      </nav>

      <LandingPage />
      <div id="stars-container">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
