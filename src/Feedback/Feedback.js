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
        <p>
          Chelsea W. : I had the great pleasure of managing Kenzie as her time
          as a Team Lead at Lambda School and I can say that she is an amazing
          developer, hard worker, innovative thinker, and an outstanding person.
          Kenzie has the personality to light up any room and make anyone feel
          comfortable, which is why she was perfect for managing a group of
          students. Not only did she lead her team with strength and compassion,
          she also was always great at giving me the advice and feedback that I
          needed to grow as a leader. Kenzie is not afraid to always put her
          best foot forward no matter the circumstance. Kenzie will make an
          amazing player to any team that she is put on. Don't hesitate with
          hiring a gem like her!
        </p>
        <p>
          Christine F. : I loved working with Kenzie! She is a great team
          member, always willing to help, ask questions, and offer ideas and
          solutions. She has a remarkable ability to foster team culture and any
          team would be lucky to have her on it!
        </p>
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
        <p>
          Henry N. : Kenzie always thinks of the questions that we need to know.
          They always have good insight on how to proceed
        </p>
        <p>
          Jesus G. : Kenzie provides much enthusiasm to the team for the
          project. I appreciate how she took the lead in assigning roles.
        </p>
        <p>
          Michail B. : Kenzie is doing an amazing job communicating and leading
          the team. Kenzie was one of the first people to suggest meeting with
          Data Science and offered plenty of questions and ideas on how to
          better communicate with the data science team. Kenzie is usually one
          of the first people to take the initiative to both answer and pose key
          ideas and questions. I think this is a great trait to have to keep the
          gears moving when working on this project especially when we're
          dealing with cross functional teams.
        </p>
      </div>
    </HomeWrapper>
  );
};

export default Feedback;
