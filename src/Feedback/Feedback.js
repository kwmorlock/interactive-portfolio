import React from "react";
import Nav from "../Nav/Nav";
import { HomeWrapper } from "../Nav/NavStyles";

const Feedback = () => {
  return (
    <HomeWrapper>
      <Nav />
      <div>
        <h1 style={{textAlign:'center'}}>Feedback</h1>
        <p style={{textAlign:'center', margin: '40px'}}>
          Feedback is very important to me, whether that feedback is from those
          I'm working under, those that are working under me, or my peers.
        </p>
      </div>
      <div>
        <h2 class="mysite"> Mentors</h2>
      </div>
      <div>
        <h2 class="mysite"> Mentees</h2>
      </div>
      <div>
        <h2 class="mysite"> Peers</h2>
      </div>
    </HomeWrapper>
  );
};

export default Feedback;
