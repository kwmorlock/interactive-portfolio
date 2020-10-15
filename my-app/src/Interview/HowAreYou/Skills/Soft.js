import React from "react";
import Nav from "../../Nav/Nav";

const Soft = () => {
  function changeColor(e) {
    e.target.style.color = "fuchsia";
  }
  function changeColors(e) {
    e.target.style.color = "black";
  }
  return (
    <div>
      <Nav />
    </div>
  );
};

export default Soft;
