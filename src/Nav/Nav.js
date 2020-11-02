import React from "react";
import { Link } from "react-router-dom";
import { NavWrapper, NavContents } from "./NavStyles";

const Nav = () => {
  function changeColor(e) {
    e.target.style.color = "fuchsia";
  }
  function changeColors(e) {
    e.target.style.color = "hotpink";
  }

  return (
    <NavWrapper>
      <NavContents>
        <Link
          to={"/"}
          style={{
            color: "hotpink",
            textDecoration: "none",
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "1%",
          }}
          onMouseOver={changeColor}
          onMouseLeave={changeColors}
        >
          {" "}
          Home{" "}
        </Link>

        <Link
          to={"/interview"}
          style={{
            color: "hotpink",
            textDecoration: "none",
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "1%",
          }}
          onMouseOver={changeColor}
          onMouseLeave={changeColors}
        >
          {" "}
          Interview{" "}
        </Link>

        <Link
          to={"/projects"}
          style={{
            color: "hotpink",
            textDecoration: "none",
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "1%",
          }}
          onMouseOver={changeColor}
          onMouseLeave={changeColors}
        >
          {" "}
          Projects{" "}
        </Link>

        <Link
          to={"/contact"}
          style={{
            color: "hotpink",
            textDecoration: "none",
            textAlign: "center",
            fontSize: "1.8rem",
            marginBottom: "1%",
          }}
          onMouseOver={changeColor}
          onMouseLeave={changeColors}
        >
          {" "}
          Contact{" "}
        </Link>
      </NavContents>
    </NavWrapper>
  );
};

export default Nav;
