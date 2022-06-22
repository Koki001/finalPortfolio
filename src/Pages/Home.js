// Home.js
import WheelScroll from "../Components/WheelScroll";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

const Home = function () {
  const navigate = useNavigate()
  const swipe = useSwipeable({
    onSwipedLeft: function(){
      navigate("/about")
    }
  })
  WheelScroll();
  return (
    <div {...swipe} tabIndex={0} className="home">
      <div className="wrapper homeContainer">
        <div className="title">
          <h1>Koki Vasileski</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
