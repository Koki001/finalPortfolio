// NavBar.js

import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import MonitorIcon from "@mui/icons-material/Monitor";
import { useCallback, useEffect, useState } from "react";

const NavBar = function () {
  const location = useLocation();
  const [navSelector, setNavSelector] = useState("");
  const [match, setMatch] = useState([]);
  const [scrollTrack, setScrollTrack] = useState(true);
  const [final, setFinal] = useState("");
  console.log(location.pathname)
  const trackRef = useCallback(
    function (e) {
      if (e !== null) {
        setMatch(e.childNodes);
      }
    },
    [navSelector, scrollTrack]
  );

  const handleClick = function (e) {
    setNavSelector(e.target.pathname);
  };
  useEffect(
    function () {
      if (match[0]) {
        if (location.pathname === match[0].pathname) {
          setFinal("home");
        } else if (location.pathname === match[1].pathname) {
          setFinal("about");
        } else if (location.pathname === match[2].pathname) {
          setFinal("projects");
        }
      }
    },
    [match, navSelector, scrollTrack]
  );

  useEffect(function () {
    const navWheel = function () {
      setScrollTrack(!scrollTrack);
    };
    window.addEventListener("wheel", navWheel);
  });

  return (
    <div className="navBar">
      <div className="leftNav">
        <MonitorIcon />
        <h3>SKV / Logo</h3>
      </div>
      <div className="middleNav" ref={trackRef}>
        <Button
          onClick={handleClick}
          LinkComponent={Link}
          to={"/"}
          variant="text"
          style={
            final === "home"
              ? { color: "white", transform: "scale(1.25)" }
              : null
          }
        >
          Home
        </Button>
        <Button
          onClick={handleClick}
          LinkComponent={Link}
          to={"/about"}
          variant="text"
          style={
            final === "about"
              ? { color: "white", transform: "scale(1.25)" }
              : null
          }
        >
          About
        </Button>
        <Button
          onClick={handleClick}
          LinkComponent={Link}
          to={"/projects"}
          variant="text"
          style={
            final === "projects"
              ? { color: "white", transform: "scale(1.25)" }
              : null
          }
        >
          Projects
        </Button>
      </div>
      <div className="rightNav">
        <a
          href="https://www.linkedin.com/in/koki-vasileski/"
          target="_blank"
          rel="noopener noreferrer"
          style={
            final === "home"
              ? {
                  animationName: " wiggle",
                  animationDuration: "0.6s",
                  animationIterationCount: "3",
                  animationDelay: "0",
                }
              : null
          }
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/Koki001"
          target="_blank"
          rel="noopener noreferrer"
          style={
            final === "home"
              ? {
                  animationName: " wiggle",
                  animationDuration: "0.6s",
                  animationIterationCount: "3",
                  animationDelay: "0.1s",
                }
              : null
          }
        >
          <GitHubIcon />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/kokivasileski/"
          rel="noopener noreferrer"
          style={
            final === "home"
              ? {
                  animationName: " wiggle",
                  animationDuration: "0.6s",
                  animationIterationCount: "3",
                  animationDelay: "0.2s",
                }
              : null
          }
        >
          <InstagramIcon />
        </a>
        <a
          target="_blank"
          href="mailto:kokicodes@gmail.com"
          rel="noopener noreferrer"
          style={
            final === "home"
              ? {
                  animationName: " wiggle",
                  animationDuration: "0.6s",
                  animationIterationCount: "3",
                  animationDelay: "0.3s",
                }
              : null
          }
        >
          <EmailIcon />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
