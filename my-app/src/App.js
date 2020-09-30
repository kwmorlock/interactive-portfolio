import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects"

function App() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
    </div>
  );
}

export default App;
