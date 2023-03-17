// JobiProject.js
import Button from "@mui/material/Button";

const JobiProject = function () {
  return (
    <div className="singleProject">
      <h3>
        Job Application Board
        <span className="inProgress">- work in progress -</span>
      </h3>
      <div className="linkButtons">
        <a
          className="liveLink"
          href="https://jobitest.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Live Link</Button>
        </a>
        <a
          className="codeLink"
          href="https://github.com/Koki001/jobApplicationBoard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Code Link</Button>
        </a>
      </div>
      <h4>
        React <span>||</span> Redux <span>||</span> SCSS <span>||</span> Firebase
      </h4>
      <p>
        * Currently, parts of the site are not responsive on smaller screen sizes, and some features are missing * <br /> <br /> This project simulates a job application board where visitors can browse the multi-page site, or search for available job openings. <br /> <br /> Additionally, users can sign up for a candidate or employer account, allowing them to post or apply for jobs, as well as giving them a variety of features under their personal profile.
      </p>
      <img className="wrenchGif" src="./assets/wrench.gif" />
    </div>
  );
};

export default JobiProject;
