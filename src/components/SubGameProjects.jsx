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

const SubGameProjects = () => {
    return (
        <div className="SubGameProjects">
            <div>
                <div className="itemRow">
                    <div className="itemCol4">
                        <div class="fit_image">
                            <img src={gifAstera} />
                        </div>
                    </div>
                    <div className="itemCol8">
                        <div style={{display:'flex'}}>
                        <div className="itemCol8">
                            <h1 className="subHeader">Astera</h1>
                        </div>
                        <a className="projIconLink" title="@kati-tran" href="https://github.com/kati-tran/Astera"><FontAwesomeIcon className="projIcon" icon={faGithub} /></a>
                        <a className="projIconLink" title="Astera" href="http://pseudologica.herokuapp.com/"><FontAwesomeIcon className="projIcon" icon={faLink} /></a>
                        </div>
                        <p className="aboutText">A low poly 2D platformer in which the player controls a black cat who is lost in the woods and must find their way back home. I designed and contributed in the development of the vision and implementation of the game with a small team of developers. Play it using the link!</p>
                        <p className="projectTech">UNITY - C#</p>
                    </div>
                </div>
                <div className="itemRow">
                    <div className="itemCol4">
                        <div class="fit_image">
                            <img src={imgFaceboi} />
                        </div>
                    </div>
                    <div className="itemCol8">
                        <div style={{display:'flex'}}>
                        <div className="itemCol8">
                            <h1 className="subHeader">faceboi</h1>
                        </div>
                        <a className="projIconLink" title="@kati-tran" href="https://github.com/kati-tran/faceboi"><FontAwesomeIcon className="projIcon" icon={faGithub} /></a>
                        <a className="projIconLink" title="faceboi" href="https://devpost.com/software/faceboi-4waoy1"><FontAwesomeIcon className="projIcon" icon={faLink} /></a>
                        </div>
                        <p className="aboutText" style={{margin: 0}}>An endless runner game that includes computer vision to implement facial recognition game-play features. This game was created for HackUCI 2020 as an introduction to game development. I was the lead developer and designer.</p>
                        <p className="projectTech">UNITY - C#</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SubGameProjects;