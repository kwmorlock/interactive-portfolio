import React from "react";
import Nav from "../Nav/Nav";
import { HomeWrapper } from "../Nav/NavStyles";
import { HomeLeft, FlexHome, FlexHomeTwo } from "./HomeStyles";

const Home = () => {
  return (
    <HomeWrapper>
      <Nav />
      <FlexHome>
        <HomeLeft>
          <h2 class="mysite"> Full Stack Developer </h2>
          <p>
            {" "}
            Welcome to my full stack developer portfolio! Feel free to snoop
            around, and if you are looking for a unique experience check out the
            interview section!
          </p>
        </HomeLeft>
        <HomeLeft>
          <img src={require("../Images/pinkhairs.jpg")} alt={"pink"} />
        </HomeLeft>
      </FlexHome>
      <FlexHomeTwo>
        <HomeLeft>
          <img src={require("../Images/pinkflowers.jpg")} alt={"flower"} />
        </HomeLeft>
        <HomeLeft>
          <h2 class="mysite"> Core Values </h2>
          <p>
            {" "}
            Having the same core values is important to me. Some of the core
            values I hold closest to my heart are inclusion, team work, and
            giving back. We can all get a paycheck anywhere, so I would much
            rather work with those that strive to make the world a better place.
          </p>
        </HomeLeft>
      </FlexHomeTwo>
      <FlexHome>
        <HomeLeft>
          <h2 class="mysite"> My Style </h2>
          <p>
            {" "}
            My personal style is all about combining soft skills with tech
            skills. I strongly feel good communication, teamwork, the right
            attitude, and empathetic listening are just as important if not more
            important than what tech skills one might know.
          </p>
        </HomeLeft>
        <HomeLeft>
          <img src={require("../Images/lightbulb.jpg")} alt={"lightbulb"} />
        </HomeLeft>
      </FlexHome>
    </HomeWrapper>
  );
};

export default Home;
