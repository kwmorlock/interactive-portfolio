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
          <h2 class="mysite"> Project 1</h2>
          <p>
            {" "}
            Quite possibly one of the best coders in all the land. If you like
            dollars, I can make you many dollars. If you want a pretty website,
            I can make you a super pretty website. To top it all off check out
            these eyes they can find any syntax error.
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
          <img src={require("../Images/readablecode.png")} />
        </ProjectsLeft>
      </FlexProjects>
      <FlexProjectsTwo>
        <ProjectsLeft>
          <img src={require("../Images/pinklaptop.jpeg")} />
        </ProjectsLeft>
        <ProjectsLeft>
          <h2 class="mysite"> Project 2 </h2>
          <p>
            {" "}
            Quite possibly one of the best coders in all the land. If you like
            dollars, I can make you many dollars. If you want a pretty website,
            I can make you a super pretty website. To top it all off check out
            these eyes they can find any syntax error.
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
          <h2 class="mysite"> Project 3</h2>
          <p>
            {" "}
            Quite possibly one of the best coders in all the land. If you like
            dollars, I can make you many dollars. If you want a pretty website,
            I can make you a super pretty website. To top it all off check out
            these eyes they can find any syntax error.
          </p>
          <ButtonProjects
            class="bodybutton"
            onclick="_blank"
            href="https://www.linkedin.com/in/kwmorlock/"
            onMouseOver={changeColor}
            onMouseLeave={changeColors}
          >
            {" "}
            Project 3
          </ButtonProjects>
        </ProjectsLeft>
        <ProjectsLeft>
          <img src={require("../Images/supplies.jpg")} />
        </ProjectsLeft>
      </FlexProjects>
    </HomeWrapper>
  );
};

export default Projects;
