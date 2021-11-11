import { faGithubAlt, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import imgPortfolio from './../images/imgPortfolio.JPG'
import imgKaiserBot from './../images/imgKaiserBot.JPG'
import imgQWERtunes from './../images/qwertunes.JPG'
import imgFaceboi from './../images/faceboi.jpg'
import gifSleepTracker from './../images/sleeptracker.gif'
import gifAstera from './../images/astera.gif'
import imgCrackfic from './../images/crackfic.JPG'
import imgRMT from './../images/riddlemethis.JPG'
import tinybiz from './../images/tinybiz.jpg'

const SubMobileProjects = () => {
    return (
        <div className="SubMobileProjects">
            <div>
                <div className="itemRow">
                    <div className="itemCol4">
                        <div class="fit_image">
                            <img src={gifSleepTracker} />
                        </div>
                    </div>
                    <div className="itemCol8">
                        <div style={{display:'flex'}}>
                        <div className="itemCol8">
                            <h1 className="subHeader">Sleep Tracker</h1>
                        </div>
                        </div>
                        <p className="aboutText" >A small Progressive Web App that allows users to record and track their nightly sleep, created in a team of two. I implemented various animations, gesture controls, and error prevention features to ensure usability standards were met following good principles of mobile design.</p>
                        <p className="projectTech">IONIC - TYPESCRIPT - ANGULAR - HTML/CSS</p>
                    </div>
                </div>
                <div className="itemRow">
                    <div className="itemCol4">
                        <div class="fit_image">
                            <img src={tinybiz} />
                        </div>
                    </div>
                    <div className="itemCol8">
                        <div style={{display:'flex'}}>
                        <div className="itemCol8">
                            <h1 className="subHeader">PocketStore</h1>
                        </div>
                        </div>
                        <p className="aboutText">A mobile app to connect local small businesses to customers. Inspired by Facebook(Meta) crashing earlier this year. This app is currently in development (as in I'm working on it right now). Feel free to ask me about it! 👀👀</p>
                        <p className="projectTech">REACT NATIVE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SubMobileProjects;