import React from "react";
import Nav from "../Nav/Nav";

const About = () => {
  return (
    <div>
      <Nav />
      <div>
        <h1>About Me</h1>
        <p>
          When I was child I asked so many questions wanting to understand how
          everything worked a teacher once jokingly said to me “Pretend a
          problem is a wall, and you can climb over it, go under it, or run
          around it; you climb over it, then run around it, only to finally go
          under it.”. After many years that curiosity I had as a child is still
          alive more so than ever and it is one of my driving forces in my
          journey as a full stack developer.
        </p>
        <h2>Myers Briggs</h2>
        <p>ENTJ-A</p>
        <img src={require("../Images/entja.png")} alt={"entja"} />
        <h2>Professional Personality Test</h2>
        <img src={require("../Images/personalitytest.png")} alt={"personalitytest"} />
      </div>
    </div>
  );
};

export default About;
