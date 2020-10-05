import React from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const Interview = () => {
  function changeColor(e) {
    e.target.style.color = "fuchsia";
  }
  function changeColors(e) {
    e.target.style.color = "black";
  }
  return (
    <div>
      <Nav />
      <header>
        <p>Interview</p>
      </header>
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
            width: "80%",
            height: "80%",
          }}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
        />
      </div>
      <div>
        <Link
          to={"/"}
          style={{
            color: "black",
            fontColor: "black",
            width: "65%",
            borderRadius: "12px",
            fontSize: "2rem",
            margin: "0 auto",
            textDecoration: "none",
            height: "10%",
            marginTop: "20px",
            textAlign: "center",
          }}
          onMouseOver={changeColor}
          onMouseLeave={changeColors}
        >
          {" "}
          "I'm doing great!"{" "}
        </Link>
      </div>
      ;
    </div>
  );
};

export default Interview;
