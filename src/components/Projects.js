import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Projects = () => {
  let [projects] = useState([
    {
      id: 1,
      project_name: "GitHub-Username-Finder",
      url: "http://github-username-finder.surge.sh/",
      repo_url: "https://github.com/EhsanShakil/Github-Username-Finder",
    },
    {
      id: 2,
      project_name: "Quotation-App",
      url: "http://quotation-app.surge.sh/",
      repo_url: "https://github.com/EhsanShakil/Quotation-App",
    },
    {
      id: 3,
      project_name: "Web-Animation A",
      url: "http://web-animation-project4a.surge.sh/",
      repo_url: "https://github.com/EhsanShakil/Web-Animation",
    },
    {
      id: 4,
      project_name: "Web-Animation B",
      url: "http://web-animation-project4b.surge.sh/",
      repo_url: "https://github.com/EhsanShakil/Web-Animation-4b",
    },
    {
      id: 5,
      project_name: "Website-With-Animation",
      url: "http://website-with-animation.surge.sh/",
      repo_url: "https://github.com/EhsanShakil/Website-With-Animation",
    },
    {
      id: 6,
      project_name: "Covid19-Tracker",
      url: "http://covid_19_tracker.surge.sh/",
      repo_url: "https://github.com/EhsanShakil/Covid-19-Tracker",
    },
    {
      id: 7,
      project_name: "Expense-Tracker",
      url: "https://expense-tracker-with-typescript.netlify.app/",
      repo_url:
        "https://github.com/EhsanShakil/Expense-Tracker-Using-TypeScript",
    },
    {
      id: 8,
      project_name: "Quiz-App",
      url: "https://quiz-app-project.surge.sh/",
      repo_url: "https://github.com/EhsanShakil/Quiz-App",
    },
    {
      id: 9,
      project_name: "Shoe-Store",
      url: "http://shoe-store-2020.surge.sh/",
      repo_url: "https://github.com/EhsanShakil/Shoe-Store",
    },
    {
      id: 10,
      project_name: "Timer-App",
      url: "https://reactjs-timer-app.netlify.app/",
      repo_url: "https://github.com/EhsanShakil/Timer-App",
    },
    {
      id: 11,
      project_name: "SpaceX-App",
      url: "https://spacex-launches-application.netlify.app/",
      repo_url: "https://github.com/EhsanShakil/SpaceX",
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
        {projects.length >= number && !(number <= 0)
          ? projects
              .filter((project) => project.id === number)
              .map((project, index) => (
                <div key={index} className="projectDetails">
                  <h3>{project.project_name}</h3>
                  <button className="projectButton">
                    <a
                      href={project.url}
                      alt="Project URL"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>Preview</h3>
                    </a>
                  </button>
                  <button className="projectButton">
                    <a
                      href={project.repo_url}
                      alt="Repo URL"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>Repository</h3>
                    </a>
                  </button>
                </div>
              ))
          : number > 11
          ? setNumber(11)
          : number < 11
          ? setNumber(1)
          : null}
        <button className="arrow" onClick={() => setNumber(++number)}>
          <AiFillCaretRight size="30" />
        </button>
      </div>
      <br />
      <div className="btns">
        <button className="btn" onClick={() => setNumber(--number)}>
          Prev
        </button>
        <button className="btn" onClick={() => setNumber(++number)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
