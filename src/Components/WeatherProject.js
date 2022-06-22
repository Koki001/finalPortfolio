// WeatherProject.js
import Button from "@mui/material/Button";

const WeatherProject = function () {
  return (
    <div className="singleProject">
      <h3>WeatherPal</h3>
      <div className="linkButtons">
        <a
          href="https://skvweatherproject3.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Live Link</Button>
        </a>
        <a
          href="https://github.com/Koki001/stojancoVasileskiProjectThree"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Code Link</Button>
        </a>
      </div>
      <h4>
        React <span>||</span> REST APIs <span>||</span> CSS
      </h4>
      <p>
        Built using React JS and the OpenWeather API, the user can check the
        weather forecast of any location they wish to search for. The
        application has an easy-to-use interface and sound error handling.
      </p>
    </div>
  );
};

export default WeatherProject;
