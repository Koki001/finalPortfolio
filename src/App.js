// App.js

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { Fragment } from "react";

function App() {

  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Fragment>
    
  );
}

export default App;
