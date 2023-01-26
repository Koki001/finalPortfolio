// FlakesProject.js
import Button from "@mui/material/Button";

const FlakesProject = function () {
  return (
    <div className="singleProject">
      <h3>Funny Flakes</h3>
      <div className="linkButtons">
        <a
          className="liveLink"
          href="https://snazzy-crostata-879748.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Live Link</Button>
        </a>
        <a
          className="codeLink"
          href="https://github.com/Koki001/funnyFlakesPSD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Code Link</Button>
        </a>
      </div>
      <h4>
        HTML <span>||</span> CSS <span>||</span> JavaScript
      </h4>
      <p>
        This project is a PSD conversion that focuses on responsiveness and
        pixel perfect transformation of the provided image into a website.{" "}
        <br />
        <br />{" "}
        <a href="./assets/flakes.png" download>
          Clicking on this link will download the image provided that was used for reference.{" "}
        </a>
      </p>
      <img className="cerealGif" src="./assets/cereal.gif" />
    </div>
  );
};

export default FlakesProject;
