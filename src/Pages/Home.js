// Home.js
import WheelScroll from "../Components/WheelScroll";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { useNavigate } from "react-router-dom";

const Home = function () {
  // const navigate = useNavigate()
  WheelScroll();
  // const handleClick = function(){
  //   navigate("about")
  // }
  return (
    <div className="home">
      <div className="wrapper homeContainer">
        <div className="title">
          <h1>Koki Vasileski</h1>
          <h2>Web Developer</h2>
        </div>
        {/* <div className="moreAboutMe" onClick={handleClick}>
          <ArrowForwardIosIcon />
          <p>About Me</p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
