import React from "react";
import { HomeWrapper } from "../Nav/NavStyles";
import Nav from "../Nav/Nav";
import { ContactLeft, FlexContact, FlexContactTwo } from "./ContactStyles";

const Contact = () => {
  return (
    <HomeWrapper>
      <Nav />
      <FlexContact>
        <ContactLeft>
          <h2 class="mysite"> GitHub</h2>
          <p>
            {" "}
            Connect on github to check out some of my clean and readable code.
          </p>
          <button
            class="bodybutton"
            onclick="window.location.href = 'https://github.com/kwmorlock'"
          >
            {" "}
            <a target="_blank" href="https://github.com/kwmorlock">
              My GitHub!
            </a>
          </button>
        </ContactLeft>
        <ContactLeft>
          <img src={require("../Images/readablecode.png")} />
        </ContactLeft>
      </FlexContact>
      <FlexContactTwo>
        <ContactLeft>
          <img src={require("../Images/pinklaptop.jpeg")} />
        </ContactLeft>
        <ContactLeft>
          <h2 class="mysite"> Twitter </h2>
          <p>
            {" "}
            Check out some of my posts on Twitter relating to coding and tech
            for both the present and the potential future of both.
          </p>
          <button
            class="bodybutton"
            onclick="window.location.href = 'https://twitter.com/KMCodes'"
          >
            {" "}
            <a target="_blank" href="https://twitter.com/KMCodes">
              My Twitter!
            </a>
          </button>
        </ContactLeft>
      </FlexContactTwo>
    </HomeWrapper>
  );
};

export default Contact;
