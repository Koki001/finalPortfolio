import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const WheelScroll = function () {
  const navigate = useNavigate();
  const location = useLocation();
  const time = new Date().getTime();
  useEffect(function () {
    const scrollFunction = function (e) {
      const currentTime = new Date().getTime();
      if (currentTime - time > 500) {
        if (location.pathname === "/" && e.deltaY > 0) {
          navigate("/about");
        } else if (location.pathname === "/about" && e.deltaY > 0) {
          navigate("/projects");
        } else if (location.pathname === "/projects" && e.deltaY > 0) {
          return;
        } else if (location.pathname === "/" && e.deltaY < 0) {
          return;
        } else if (location.pathname === "/about" && e.deltaY < 0) {
          navigate("/");
        } else if (location.pathname === "/projects" && e.deltaY < 0) {
          navigate("/about");
        }
      }
    };
    window.addEventListener("wheel", scrollFunction);

    return function () {
      window.removeEventListener("wheel", scrollFunction);
    };
  }, []);
};

export default WheelScroll;
