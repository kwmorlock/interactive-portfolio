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
          <h2 class="mysite"> Expert Programmer </h2>
          <p>
            {" "}
            Quite possibly one of the best coders in all the land. If you like
            dollars, I can make you many dollars. If you want a pretty website,
            I can make you a super pretty website. To top it all off check out
            these eyes they can find any syntax error.
          </p>
        </HomeLeft>
        <HomeLeft>
          <img src={require("../Images/pinkhairs.jpg")} />
        </HomeLeft>
      </FlexHome>
      <FlexHomeTwo>
        <HomeLeft>
          <img src={require("../Images/pinkhairs.jpg")} />
        </HomeLeft>
        <HomeLeft>
          <h2 class="mysite"> Expert Programmer </h2>
          <p>
            {" "}
            Quite possibly one of the best coders in all the land. If you like
            dollars, I can make you many dollars. If you want a pretty website,
            I can make you a super pretty website. To top it all off check out
            these eyes they can find any syntax error.
          </p>
        </HomeLeft>
      </FlexHomeTwo>
      <FlexHome>
        <HomeLeft>
          <h2 class="mysite"> Expert Programmer </h2>
          <p>
            {" "}
            Quite possibly one of the best coders in all the land. If you like
            dollars, I can make you many dollars. If you want a pretty website,
            I can make you a super pretty website. To top it all off check out
            these eyes they can find any syntax error.
          </p>
        </HomeLeft>
        <HomeLeft>
          <img src={require("../Images/pinkhairs.jpg")} />
        </HomeLeft>
      </FlexHome>
    </HomeWrapper>
  );
};

export default Home;
