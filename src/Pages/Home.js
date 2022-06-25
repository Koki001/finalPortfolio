// Home.js
import WheelScroll from "../Components/WheelScroll";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

const Home = function (props) {
  const navigate = useNavigate();
  const swipe = useSwipeable({
    onSwipedLeft: function () {
      props.finalProp("about");
      navigate("/about");
    }
    // onSwipedUp: function () {
    //   props.finalProp("about");
    //   navigate("/about");
    // },
  });
  WheelScroll();
  return (
    <div {...swipe} tabIndex={0} className="home">
      <div className="wrapper homeContainer">
        <div className="title">
          <h1>Koki Vasileski</h1>
          <h1 className="replaceMain">SKV</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
