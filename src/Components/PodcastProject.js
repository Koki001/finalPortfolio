// PodcastProject.js
import Button from "@mui/material/Button";

const PodcastProject = function () {
  return (
    <div className="singleProject">
      <h3>Podcast Prioritizer</h3>
      <div className="linkButtons">
        <a
          href="https://unrivaled-bubblegum-a5e52d.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Live Link</Button>
        </a>
        <a
          href="https://github.com/PodcastPrioritizerProject/podcastPrioritizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Code Link</Button>
        </a>
      </div>
      <h4>
        React <span>||</span> SASS <span>||</span> REST APIs <span>||</span>{" "}
        Firebase
      </h4>
      <p>
        This application allows the user to choose from a selection of podcasts
        that matches their chosen genre and commute time. <br />
        <br /> The user has to first chose their starting position (or use our
        geolocation) and final commute destination. Using the MapQuest API, we
        then present the user with a choice between walking, biking, or driving,
        all while being able to see the different information for each route.{" "}
        <br />
        <br /> Finally, the user can select a podcast genre and will then be
        presented with the appropriate podcast lenghts for their chosen commute
        time. This was all made possible using Hooks, React Router, and Session
        Storage.
      </p>
    </div>
  );
};

export default PodcastProject;
