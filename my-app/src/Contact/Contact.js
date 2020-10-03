import React from "react";
import { HomeWrapper } from "../Nav/NavStyles";
import Nav from "../Nav/Nav";
import { ContactLeft, FlexContact, FlexContactTwo, ButtonContact } from "./ContactStyles";

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
          <ButtonContact
            class="bodybutton"
            onclick="window.location.href = 'https://github.com/kwmorlock'"
          >
            {" "}
            <a target="_blank" href="https://github.com/kwmorlock">
              GitHub
            </a>
          </ButtonContact>
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
          <ButtonContact
            class="bodybutton"
            onclick="window.location.href = 'https://twitter.com/KMCodes'"
          >
            {" "}
            <a target="_blank" href="https://twitter.com/KMCodes">
              Twitter
            </a>
          </ButtonContact>
        </ContactLeft>
      </FlexContactTwo>
      <FlexContact>
        <ContactLeft>
          <h2 class="mysite"> LinkedIn</h2>
          <p> Connect with me in a professional environment.</p>
          <ButtonContact
            class="bodybutton"
            onclick="window.location.href = 'https://www.linkedin.com/in/kwmorlock/'"
          >
            {" "}
            <a target="_blank" href="https://www.linkedin.com/in/kwmorlock/">
              LinkedIn
            </a>
          </ButtonContact>
        </ContactLeft>
        <ContactLeft>
          <img src={require("../Images/supplies.jpg")} />
        </ContactLeft>
      </FlexContact>
    </HomeWrapper>
  );
};

export default Contact;
