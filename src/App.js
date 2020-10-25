import React, { useState } from "react";
import Home from "./components/Home";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import {
  ImHome,
  ImStack,
  ImLinkedin,
  ImStackoverflow,
  ImFacebook2,
  ImGithub,
} from "react-icons/im";
import { MdWork, MdPictureAsPdf } from "react-icons/md";

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
      <div className="icons">
        <button className="icon" title="Resume" onClick={() => setScreen(Home)}>
          <ImFacebook2 size="35" />
        </button>
        <button className="icon" title="Resume" onClick={() => setScreen(Home)}>
          <ImLinkedin size="35" />
        </button>
        <button className="icon" title="Resume" onClick={() => setScreen(Home)}>
          <ImStackoverflow size="35" />
        </button>
        <button className="icon" title="Resume" onClick={() => setScreen(Home)}>
          <ImGithub size="35" />
        </button>
      </div>
    </div>
  );
}

export default App;
