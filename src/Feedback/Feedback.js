import React from "react";
import Nav from "../Nav/Nav";
import { HomeWrapper } from "../Nav/NavStyles";

const Feedback = () => {
  return (
    <HomeWrapper>
      <Nav />
      <div>
        <h1 style={{ textAlign: "center" }}>Feedback</h1>
        <p style={{ textAlign: "center", margin: "40px" }}>
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
        <p>
          Julia V. : Kenzie is a really great leader for our group, and helps to
          lead the team on what decisions and actions we need to do for our
          project. She also does a really amazing job at communicating with the
          other ds team who is not within our group, asking questions and giving
          expectations on what we what from the ds team. Kenzie is also good at
          creating a team culture atmosphere.
        </p>
        <p>
          Steven S. : Great leadership abilities and excellent work in technical
          skill on the front and back ends of the project. Great idea
          suggestions and teamwork with the rest of the group
        </p>
      </div>
    </HomeWrapper>
  );
};

export default Feedback;
