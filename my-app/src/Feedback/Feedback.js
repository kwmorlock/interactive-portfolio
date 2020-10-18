import React from "react";
import Nav from "../Nav/Nav";
import { HomeWrapper } from "../Nav/NavStyles";

const Feedback = () => {
  return (
    <HomeWrapper>
      <Nav />
      <h2 class="mysite"> Mentors</h2>
      <h2 class="mysite"> Mentees</h2>
      <h2 class="mysite"> Peers</h2>
    </HomeWrapper>
  );
};

export default Feedback;
