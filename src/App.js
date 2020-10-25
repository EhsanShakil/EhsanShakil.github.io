import React, { useState } from "react";
import Home from "./components/Home";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";

function App() {
  const [screen, setScreen] = useState(Home);
  return (
    <div>
      <h1>{screen}</h1>
      <button onClick={() => setScreen(Home)}>Home</button>
      <button onClick={() => setScreen(Stacks)}>Stacks</button>
      <button onClick={() => setScreen(Projects)}>Projects</button>
    </div>
  );
}

export default App;
