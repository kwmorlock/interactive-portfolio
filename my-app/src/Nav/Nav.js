import React from "react";
import { Link } from "react-router-dom";
import { NavWrapper, NavContents } from "./NavStyles";

const Nav = () => {
  return (
    <NavWrapper>
      <NavContents>
        <Link
          to={"/"}
          style={{
            color: "hotpink",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          {" "}
          Home{" "}
        </Link>

        <Link
          to={"/contact"}
          style={{
            color: "hotpink",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          {" "}
          Contact{" "}
        </Link>
        <header>
          <p>Nav</p>
        </header>
      </NavContents>
    </NavWrapper>
  );
};

export default Nav;
