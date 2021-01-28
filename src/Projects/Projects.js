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
            href="https://github.com/Lambda-School-Labs/Labs25-SaverLife-TeamB-be"
            onMouseOver={changeColor}
            onMouseLeave={changeColors}
          >
            {" "}
            Github
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
            href="https://github.com/bw-tech-stuff-2/backend"
            onMouseOver={changeColor}
            onMouseLeave={changeColors}
          >
            {" "}
            Github
          </ButtonProjects>
        </ProjectsLeft>
      </FlexProjectsTwo>
      <FlexProjects>
        <ProjectsLeft>
          <h2 class="mysite"> LGBTQ Stories </h2>
          <p>
            {" "}
            LGBTQ Stories where you can share anonymous stories about your own
            experiences, keep track of your own stories, and even edit or delete
            them at a later time. React frontend, Node and Express backend.
            HTML | CSS | JavaScript | React | NodeJS | Express | Bcryptjs | Knex
            | SQLite | Styled Components
          </p>
          <ButtonProjects
            class="bodybutton"
            onclick="_blank"
            href="https://github.com/kwmorlock/lgbtqstories-be"
            onMouseOver={changeColor}
            onMouseLeave={changeColors}
          >
            {" "}
            Github
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
