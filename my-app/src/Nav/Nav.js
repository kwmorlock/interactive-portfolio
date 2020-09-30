import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./NavStyles";

const Nav = () => {
  return (
    <div>
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
    </div>
  );
};

export default Nav;
