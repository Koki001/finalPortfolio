// RetroPlanner.js
import Button from "@mui/material/Button";

const RetroPlanner = function () {
  return (
    <div className="singleProject">
      <h3>Retro Life Planner </h3>
      <div className="linkButtons">
        <a
          className="liveLink"
          href="https://peaceful-marigold-9bf122.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Live Link</Button>
        </a>
        <a
          className="codeLink"
          href="https://github.com/Koki001/plannerDragDrop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Code Link</Button>
        </a>
      </div>
      <h4>
        React <span>||</span> Firebase <span>||</span> SCSS <span>||</span> MUI
      </h4>
      <p>
        This project is a retro-style planner where the user can create an account and start organizing their daily activities.<br /> <br /> The tasks added to the planner are saved under that user's account through Firebase. For convenience, any tasks created can also be dragged across sections without the use of external libraries.
      </p>
      <img className="writingGif" src="./assets/writing.gif" />
    </div>
  );
};

export default RetroPlanner;
