import React, { useState } from "react";
import Home from "./components/Home";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import { ImHome, ImStack } from "react-icons/im";
import { MdWork } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";

import "./App.css";
function App() {
  const [screen, setScreen] = useState(Home);
  return (
    <div className="container">
      <div className="icons">
        <button className="icon" title="Home" onClick={() => setScreen(Home)}>
          <ImHome size="35" />
        </button>
        <button
          className="icon"
          title="Tech Stacks"
          onClick={() => setScreen(Stacks)}
        >
          <ImStack size="35" />
        </button>
        <button
          className="icon"
          title="Projects"
          onClick={() => setScreen(Projects)}
        >
          <MdWork size="35" />
        </button>
        <button className="icon" title="Resume" onClick={() => setScreen(Home)}>
          <MdPictureAsPdf size="35" />
        </button>
      </div>
      <div className="screen">
        <span>{screen}</span>
      </div>
    </div>
  );
}

export default App;
