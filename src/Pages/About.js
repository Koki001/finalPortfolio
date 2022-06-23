// About.js
import WheelScroll from "../Components/WheelScroll";
import { useSwipeable } from "react-swipeable";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaGit,
  FaGithub,
  FaSass,
  FaPython,
  FaUniversalAccess,
  FaGamepad,
  FaChess,
  FaMotorcycle,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFirebase,
  SiCypress,
  SiPcgamingwiki,
} from "react-icons/si";
import { VscDebug } from "react-icons/vsc";
import { RiBilliardsFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const About = function (props) {
  const navigate = useNavigate();
  const swipe = useSwipeable({
    onSwipedLeft: function () {
      props.finalProp("projects");
      navigate("/projects");
    },
    onSwipedRight: function () {
      props.finalProp("home");
      navigate("/");
    },
    onSwipedDown: function(){
      props.finalProp("projects");
      navigate("/projects");
    },
    onSwipedUp: function(){
      props.finalProp("home");
      navigate("/");
    }
  });
  WheelScroll();
  return (
    <div {...swipe} tabIndex={0} className="about">
      <div className="wrapper aboutContainer">
        <div className="aboutTop">
          <div className="aboutImage">
            <img src="./assets/profilePicNoBgCropped.png" alt="" />
          </div>
          <div className="aboutText">
            <p>
              <span>Hello!</span> I'm a web developer with a passion for
              creating innovative virtual spaces that focus on providing the
              user with a seamless experience. Coming from a long and successful
              work history in the hospitality and management sector, I've
              learned that<span> teamwork</span>, <span>communication</span>,
              and <span>attention to detail</span>, all play a key role in
              creating a positive and productive work environment. I now combine
              those traits with my technical skills when taking on projects in
              the tech industry.
              <br />
            </p>
            <p className="skillHobbiesText">
              Have a look at some of my <span>technical skills</span> and{" "}
              <span>hobbies</span> below:
            </p>
          </div>
        </div>
        <div className="aboutSkills">
          <div className="smallerScreenSkills">
            <p>
              <span>ReactJS</span>
            </p>
            <p>
              <span>JavaScript</span>
            </p>
            <p>
              <span>CSS3</span>
            </p>
            <p>
              <span>Git</span>
            </p>
            <p>
              <span>GitHub</span>
            </p>
            <p>
              <span>Firebase</span>
            </p>
            <p>
              <span>SCSS/SASS</span>
            </p>
            <p>
              <span>HTML5</span>
            </p>
            <p>
              <span>Python</span>
            </p>
            <p>
              <span>Cypress</span>
            </p>
            <p>
              <span>Debugging</span>
            </p>
            <p>
              <span>Accessibility</span>
            </p>
            <p className="del">
              <span>Video Games</span>
            </p>
            <p className="del">
              <span>Chess</span>
            </p>
            <p className="del">
              <span>Pool</span>
            </p>
            <p className="del">
              <span>PC Building</span>
            </p>
            <p className="del">
              <span>Motorcycles</span>
            </p>
            <p className="del">
              <span>Coding</span>
            </p>
          </div>
          <div className="skillsContainer">
            <p>
              <FaReact />
              <span>ReactJS</span>
            </p>
            <p>
              <SiCypress />
              <span>Cypress</span>
            </p>
            <p>
              <FaCss3Alt />
              <span>CSS3</span>
            </p>
            <p>
              <VscDebug />
              <span>Debugging</span>
            </p>
            <p>
              <FaGit />
              <span>Git</span>
            </p>
            <p>
              <FaGithub />
              <span>GitHub</span>
            </p>
            <p>
              <SiFirebase />
              <span>Firebase</span>
            </p>
            <p>
              <FaSass />
              <span>SCSS/SASS</span>
            </p>
            <p>
              <FaPython />
              <span>Python</span>
            </p>
            <p>
              <SiJavascript />
              <span>JavaScript</span>
            </p>
            <p>
              <FaHtml5 />
              <span>HTML5</span>
            </p>
            <p>
              <FaUniversalAccess />
              <span>Accessibility</span>
            </p>
            <p className="hobbies">
              <FaGamepad />
              <span>Video Games</span>
            </p>
            <p className="hobbies">
              <FaChess />
              <span>Chess</span>
            </p>
            <p className="hobbies">
              <RiBilliardsFill />
              <span>Pool</span>
            </p>
            <p className="hobbies">
              <SiPcgamingwiki />
              <span>PC Building</span>
            </p>
            <p className="hobbies">
              <FaMotorcycle />
              <span>Motorcycles</span>
            </p>
            <p className="hobbies">
              <FaCode />
              <span>Coding</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
