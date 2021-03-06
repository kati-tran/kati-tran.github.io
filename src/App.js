import './styles/Stars.scss';
import './styles/Master.css';
import './styles/NavBar.scss';

import React,{useEffect}  from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";

import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize("UA-212548215-1");
    ReactGA.pageview("/#");
  })

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
          <li className="menu__item"><a className="menu__link" href="#WorkExperience">Work Experience</a></li>
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
      <div id="stars-container">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
      <WorkExperience />
      <Contact />
    </main>
  );
}

export default App;
