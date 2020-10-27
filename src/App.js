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
  // useEffect(() => {
  //   <Home />;
  //   <Stacks />;
  //   <Projects />;
  // }, []);
  let [screen, setScreen] = useState(<Home />);

  return (
    <div className="container">
      <div className="icons">
        <button
          className="icon"
          title="Home"
          onClick={() => setScreen(<Home />)}
        >
          <ImHome size="35" />
        </button>
        <button
          className="icon"
          title="Tech Stacks"
          onClick={() => setScreen(<Stacks />)}
        >
          <ImStack size="35" />
        </button>
        <button
          className="icon"
          title="Projects"
          onClick={() => setScreen(<Projects />)}
        >
          <MdWork size="35" />
        </button>
        <button className="icon" title="Resume">
          <a
            href="https://www.facebook.com/ehxn0"
            target="_blank"
            rel="noreferrer"
          >
            <MdPictureAsPdf size="35" />
          </a>
        </button>
      </div>
      <div className="screen">
        <span>{screen}</span>
      </div>
      <div className="icons">
        <button className="icon" title="Facebook">
          <a
            href="https://www.facebook.com/ehxn0"
            target="_blank"
            rel="noreferrer"
          >
            <ImFacebook2 size="35" />
          </a>
        </button>
        <button className="icon" title="LinkedIn">
          <a
            href="https://www.linkedin.com/in/ahsan-shakeel-93342980/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin size="35" />
          </a>
        </button>
        <button className="icon" title="Stackoverflow">
          <a
            href="https://stackoverflow.com/users/13884028/ahsan-shakeel"
            target="_blank"
            rel="noreferrer"
          >
            <ImStackoverflow size="35" />
          </a>
        </button>
        <button className="icon" title="GitHub">
          <a
            href="https://github.com/EhsanShakil"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub size="35" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default App;
