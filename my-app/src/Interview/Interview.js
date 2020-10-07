import React from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import { InterviewContents } from "./InterviewStyles";

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
      <InterviewContents>
        <Link
          to={"/interview/bad"}
          style={{
            color: "black",
            fontColor: "black",
            width: "65%",
            borderRadius: "12px",
            fontSize: "2rem",
            textDecoration: "none",
          }}
          onMouseOver={changeColor}
          onMouseLeave={changeColors}
        >
          {" "}
          "I could be better..."{" "}
        </Link>
        <Link
          to={"/"}
          style={{
            color: "black",
            fontColor: "black",
            width: "65%",
            borderRadius: "12px",
            fontSize: "2rem",
            textDecoration: "none",
          }}
          onMouseOver={changeColor}
          onMouseLeave={changeColors}
        >
          {" "}
          Say nothing.{" "}
        </Link>
        <Link
          to={"/interview/great"}
          style={{
            color: "black",
            fontColor: "black",
            width: "65%",
            borderRadius: "12px",
            fontSize: "2rem",
            textDecoration: "none",
          }}
          onMouseOver={changeColor}
          onMouseLeave={changeColors}
        >
          {" "}
          "I'm doing great!"{" "}
        </Link>
      </InterviewContents>
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

export default Interview;
