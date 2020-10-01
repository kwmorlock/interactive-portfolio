import React from "react";
import Nav from "../Nav/Nav"
import { HomeWrapper} from "../Nav/NavStyles";

const Home = () => {
  return (
    <HomeWrapper>
         <Nav />
      <body>
        <p>Home</p>
      </body>
      </HomeWrapper>
  );
}

export default Home;
