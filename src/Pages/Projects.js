// Projects.js
import WheelScroll from "../Components/WheelScroll";
import { useSwipeable } from "react-swipeable";
import PodcastProject from "../Components/PodcastProject";
// import PokemonProject from "../Components/PokemonProject";
import WeatherProject from "../Components/WeatherProject";
// import ChartProject from "../Components/ChartProject";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import RetroPlanner from "../Components/RetroPlanner";
import FlakesProject from "../Components/FlakesProject";
import JobiProject from "../Components/JobiProject";
import MessengetProject from "../Components/MessengerProject";

const Projects = function (props) {
  const [showProject, setShowProject] = useState(0);
  const projectArray = [
    <MessengetProject />,
    <PodcastProject />,
    <JobiProject />,
    // <RetroPlanner />,
    // <ChartProject />,
    <WeatherProject />,
    <FlakesProject />,
    // <PokemonProject />,
  ];
  const navigate = useNavigate();
  const swipe = useSwipeable({
    onSwipedRight: function () {
      props.finalProp("about");
      navigate("/about");
    }
  });

  const handlePrevious = function () {
    if (showProject > 0) {
      setShowProject(showProject - 1);
    } else {
      setShowProject(projectArray.length - 1);
    }
  };
  const handleNext = function () {
    if (showProject < projectArray.length - 1) {
      setShowProject(showProject + 1);
    } else {
      setShowProject(0);
    }
  };
  const handleKeyDown = function (e) {
    if (e.code === "ArrowLeft") {
      if (showProject > 0) {
        setShowProject(showProject - 1);
      } else {
        setShowProject(projectArray.length - 1);
      }
    } else if (e.code === "ArrowRight") {
      if (showProject < projectArray.length - 1) {
        setShowProject(showProject + 1);
      } else {
        setShowProject(0);
      }
    }
  };

  WheelScroll();
  return (
    <div {...swipe} tabIndex={0} className="projects" onKeyDown={handleKeyDown}>
      <div className="wrapper projectsContainer">
        <div className="projectViewContainer">
          <button className="prev" onClick={handlePrevious}>
            <ArrowBackIosNewIcon />
          </button>
          <div className="projectView">{projectArray[showProject]}</div>
          <button className="next" onClick={handleNext}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
