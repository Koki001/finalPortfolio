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
        weather forecast for any location in the database. There is an easy to
        use drop-down menu for pre-filled country selections and an input for a
        city. <br />
        <br /> After submitting the search, the user is presented with a detailed weather card, as well as a four day forecast for that location. The application boasts sound error handling with custom pop-up boxes.
      </p>
    </div>
  );
};

export default WeatherProject;
