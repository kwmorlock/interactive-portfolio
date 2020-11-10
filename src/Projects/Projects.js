import React from "react";
import { HomeWrapper } from "../Nav/NavStyles";
import Nav from "../Nav/Nav";
import {
  ProjectsLeft,
  FlexProjects,
  FlexProjectsTwo,
  ButtonProjects,
} from "./ProjectsStyles";

const Projects = () => {
  function changeColor(e) {
    e.target.style.color = "fuchsia";
  }
  function changeColors(e) {
    e.target.style.color = "hotpink";
  }
  return (
    <HomeWrapper>
      <Nav />
      <FlexProjects>
        <ProjectsLeft>
          <h2 class="mysite"> SaverLife</h2>
          <p>
            {" "}
            SaverLife is a non-profit with the goal of helping people save their
            first $400. Application was build using React, Node.js, SendGrid,
            Redis, and Jest.
          </p>
          <ButtonProjects
            class="bodybutton"
            onclick="_blank"
            href="https://github.com/kwmorlock"
            onMouseOver={changeColor}
            onMouseLeave={changeColors}
          >
            {" "}
            Project 1
          </ButtonProjects>
        </ProjectsLeft>
        <ProjectsLeft>
          <img
            src={require("../Images/readablecode.png")}
            alt={"readablecode"}
          />
        </ProjectsLeft>
      </FlexProjects>
      <FlexProjectsTwo>
        <ProjectsLeft>
          <img src={require("../Images/pinklaptop.jpeg")} alt={"pinklaptop"} />
        </ProjectsLeft>
        <ProjectsLeft>
          <h2 class="mysite"> Rent My Tech Stuff </h2>
          <p>
            {" "}
            Backend API built using Node, and Express. Can create user, login,
            and perform crud operations for two user types.
          </p>
          <ButtonProjects
            class="bodybutton"
            onclick="_blank"
            href="https://twitter.com/KMCodes"
            onMouseOver={changeColor}
            onMouseLeave={changeColors}
          >
            {" "}
            Project 2
          </ButtonProjects>
        </ProjectsLeft>
      </FlexProjectsTwo>
      <FlexProjects>
        <ProjectsLeft>
          <h2 class="mysite"> Graph Traversal</h2>
          <p>
            {" "}
            A pre-generated graph consisting of 500 rooms. A traversal path was
            made with directions that, when walked in order, will visit every
            room on the map at least once. This is done in under 2000 steps, and
            written with Python. Constructed a traversal graph with algorithms
            written for finding connected components.
          </p>
          <ButtonProjects
            class="bodybutton"
            onclick="_blank"
            href="https://github.com/kwmorlock/Graphs"
            onMouseOver={changeColor}
            onMouseLeave={changeColors}
          >
            {" "}
            Project 3
          </ButtonProjects>
        </ProjectsLeft>
        <ProjectsLeft>
          <img src={require("../Images/supplies.jpg")} alt={"supplies"} />
        </ProjectsLeft>
      </FlexProjects>
    </HomeWrapper>
  );
};

export default Projects;
