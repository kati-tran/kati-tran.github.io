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

const SubWebProjects = () => {
  return (
    <div className="SubWebProjects">
    <div>
        <div className="itemRow">
            <div className="itemCol4">
                <div class="fit_image">
                    <img src={imgPortfolio} />
                </div>
            </div>
            <div className="itemCol8">
                <div style={{display:'flex'}}>
                <div className="itemCol8">
                    <h1 className="subHeader">Kati's Portfolio</h1>
                </div>
                <a className="projIconLink" title="@kati-tran" href="https://github.com/kati-tran/kati"><FontAwesomeIcon className="projIcon" icon={faGithub} /></a>
                <a className="projIconLink" title="Portfolio" href="#LandingPage"><FontAwesomeIcon className="projIcon" icon={faLink} /></a>
                </div>
                <p className="aboutText">This is the website you're on right now! This is a single page web application designed to highlight my skills and get a better look at some of the projects I've made. I've designed it on my own using React Framework to get started on learning React for future projects. Thanks for visiting!</p>
                <p className="projectTech">REACTJS - HTML - CSS - JAVASCRIPT</p>
            </div>
        </div>
        <div className="itemRow">
            <div className="itemCol4">
                <div class="fit_image">
                    <img src={imgQWERtunes} />
                </div>
            </div>
            <div className="itemCol8">
                <div style={{display:'flex'}}>
                <div className="itemCol8">
                    <h1 className="subHeader">Qwertunes</h1>
                </div>
                <a className="projIconLink" title="@kati-tran" href="https://github.com/sandra-soto/qwerhacks"><FontAwesomeIcon className="projIcon" icon={faGithub} /></a>
                <a className="projIconLink" title="Astera" href="https://devpost.com/software/qwertunes"><FontAwesomeIcon className="projIcon" icon={faLink} /></a>
                </div>
                <p className="aboutText" style={{margin: 0}}>From underground to well-known, find LGBTQ+ music artists by recommendation of their most fitting SONG based on your tastes! This website was created for QWERHacks 2021 where it won two awards: "Best Entertainment" and "Best Domain". I was the backend developer learning to use Spotify's API.</p>
                <p className="projectTech">NODE.JS - JAVASCRIPT - HTML/CSS - SPOTIFY API - FIREBASE</p>
            </div>
        </div>
        <div className="itemRow">
            <div className="itemCol4">
                <div class="fit_image">
                    <img src={imgRMT} />
                </div>
            </div>
            <div className="itemCol8">
                <div style={{display:'flex'}}>
                <div className="itemCol8">
                    <h1 className="subHeader">Riddle Me This!</h1>
                </div>
                <a className="projIconLink" title="@kati-tran" href="https://github.com/sandra-soto/riddle-me-this"><FontAwesomeIcon className="projIcon" icon={faGithub} /></a>
                <a className="projIconLink" title="Riddle Me This" href="http://riddlethis.herokuapp.com/"><FontAwesomeIcon className="projIcon" icon={faLink} /></a>
                </div>
                <p className="aboutText" style={{margin: 0}}>Riddle Me This! is an online multiplayer game, in which players race against the clock (and other players) to answer riddles. I am the concept creator of Riddle Me This!, and webscraped the riddles that appear on the site. The complete functionality and design of the site is all from my teammate <a href="https://github.com/sandra-soto" style={{color: '#FFF'}}>Sandra</a>. Go check it out!</p>
                <p className="projectTech">NODE.JS - JAVASCRIPT - SOCKET.IO</p>
            </div>
        </div>
        <div className="itemRow">
            <div className="itemCol4">
                <div class="fit_image">
                    <img src={imgCrackfic} />
                </div>
            </div>
            <div className="itemCol8">
                <div style={{display:'flex'}}>
                <div className="itemCol8">
                    <h1 className="subHeader">Crackfic</h1>
                </div>
                <a className="projIconLink" title="@kati-tran" href="https://github.com/kati-tran/faceboi"><FontAwesomeIcon className="projIcon" icon={faGithub} /></a>
                <a className="projIconLink" title="Crackfic" href="https://devpost.com/software/faceboi-4waoy1"><FontAwesomeIcon className="projIcon" icon={faLink} /></a>
                </div>
                <p className="aboutText">Madlib generator that uses NLTK and Beautiful Soup to create new stories from the fanfiction site AO3. The very first personal project I worked on with two other teammates to begin the basics of web development. It could use a lot of work, but something this small is still cute and fun to use with the nostalgia it gives me.</p>
                <p className="projectTech">PYTHON - FLASK - HTML/CSS - BEAUTIFUL SOUP</p>
            </div>
        </div>
    </div>
</div>
  );
};
export default SubWebProjects;