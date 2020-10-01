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
    </HomeWrapper>
  );
};

export default Contact;
