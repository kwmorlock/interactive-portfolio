import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Interview from "./Interview/Interview";
import Good from "./Interview/HowAreYou/Good";
import Bad from "./Interview/HowAreYou/Bad";
import Nothing from "./Interview/HowAreYou/Nothing";
import NothingTwo from "./Interview/HowAreYou/NothingTwo/NothingTwo";
import Lagging from "./Interview/HowAreYou/NothingTwo/Lagging";
import Tech from "./Interview/HowAreYou/Skills/Tech"

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
      <Route exact path="/interview">
        <Interview />
      </Route>
      <Route exact path="/interview/great">
        <Good />
      </Route>
      <Route exact path="/interview/bad">
        <Bad />
      </Route>
      <Route exact path="/interview/nothing">
        <Nothing />
      </Route>
      <Route exact path="/interview/nothingtwo">
        <NothingTwo />
      </Route>
      <Route exact path="/interview/lagging">
        <Lagging />
      </Route>
      <Route exact path="/interview/tech">
        <Tech />
      </Route>
    </div>
  );
}

export default App;
