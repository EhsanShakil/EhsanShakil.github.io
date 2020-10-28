import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Projects = () => {
  let [projects, setProjects] = useState([
    {
      id: 1,
      project_name: "COVID19-TRACKER",
      url: "http://covid_19_tracker.surge.sh/",
    },
    {
      id: 2,
      project_name: "QUIZ-APP",
      url: "https://quiz-app-project.netlify.app/",
    },
  ]);
  let [number, setNumber] = useState(1);
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project">
        <button className="arrow" onClick={() => setNumber(--number)}>
          <AiFillCaretLeft size="30" />
        </button>
        {projects.length >= number && number !== 0
          ? projects
              .filter((project) => project.id === number)
              .map((project, index) => (
                <div key={index}>
                  <p>{project.id}</p>
                  <p>{project.project_name}</p>
                  <p>{project.url}</p>
                </div>
              ))
          : setNumber(1)}
        <button className="arrow" onClick={() => setNumber(++number)}>
          <AiFillCaretRight size="30" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
