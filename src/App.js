// App.js

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { Fragment, useState } from "react";

function App() {

  const [final, setFinal] = useState("")
  const finalState = function(e){
    setFinal(e)
  }

  return (
    <Fragment>
      <NavBar nav={final} />
      <Routes>
        <Route path="/" element={<Home finalProp={finalState} />} />
        <Route path="/about" element={<About finalProp={finalState} />} />
        <Route path="/projects" element={<Projects finalProp={finalState} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
