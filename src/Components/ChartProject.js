// ChartProject.js
import Button from "@mui/material/Button";

const ChartProject = function () {
  return (
    <div className="singleProject">
      <h3>
        The Chart Emporium{" "}
        <span className="inProgress">- work in progress -</span>
      </h3>
      <div className="linkButtons">
        <a
          className="liveLink"
          href="https://kokischartemporium.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Live Link</Button>
        </a>
        <a
          className="codeLink"
          href="https://github.com/Koki001/kokisChartPal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Code Link</Button>
        </a>
      </div>
      <h4>
        React <span>||</span> Redux <span>||</span> SASS <span>||</span> MUI
      </h4>
      <p>
        Using the{" "}
        <a
          className="rechartsLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://recharts.org/en-US/"
        >
          Recharts
        </a>{" "}
        library, I wanted to create a fully dynamic graphing site, which is both
        customizable and easy to use. <br /> <br /> Users are able to pick a
        chart type from a drop-down menu, and start visualizing their data live.
        Once the chart is filled out, users can also download an image of their
        chart. <br /> <br /> For now, Redux is only lightly used. Once every
        chart type is available, I would like for users to be able to switch
        between different types of charts without having to re-enter their data.
      </p>
      <img className="wrenchGif" src="./assets/wrench.gif" />
    </div>
  );
};

export default ChartProject;
