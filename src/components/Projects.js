import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Projects = () => {
  let [number, setNumber] = useState(1);
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>{number}</p>
      <button onClick={() => setNumber(++number)}>Increase</button>
      <button onClick={() => setNumber(--number)}>
        <AiFillCaretLeft />
      </button>
      <button onClick={() => setNumber(++number)}>
        <AiFillCaretRight />
      </button>
    </div>
  );
};

export default Projects;
