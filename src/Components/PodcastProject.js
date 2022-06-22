// PodcastProject.js
import Button from "@mui/material/Button";

const PodcastProject = function(){
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
        A collaborative project that allows the user to map out their commute
        and select a podcast that matches their commute time. The site is
        designed with mobile-first layout in mind and uses multiple APIs. The
        application also uses React Router and session storage to improve the
        user experience.
      </p>
    </div>
  );
}

export default PodcastProject