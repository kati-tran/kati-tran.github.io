import './styles/Stars.scss';
import './styles/Master.css';

import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <main className="Background">
      <LandingPage />
      <div id="stars-container">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
