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
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            width: "70%",
            height: "70%",
          }}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Soft;
