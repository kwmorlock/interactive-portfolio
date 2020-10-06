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
      {/* <header>
        <p>Interview</p>
      </header> */}
       <div
        style={{
          // marginTop: "-90px",
          // marginLeft: "90px",
          // zIndex:"-1",
          // height: "10%",
        }}
      >
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
          "I could be better"{" "}
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
          "I'm doing great!"{" "}
        </Link>
      </div>
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
      {/* <div
        style={{
          // marginTop: "-90px",
          // marginLeft: "90px",
          // zIndex:"-1",
          // height: "10%",
        }}
      >
        <Link
          to={"/"}
          style={{
            color: "black",
            fontColor: "black",
            width: "65%",
            borderRadius: "12px",
            fontSize: "2rem",
            // margin: "0 auto",
            textDecoration: "none",
            // height: "10%",
            // marginTop: "-200px",
            // textAlign: "center",
            // marginTop: "-90px",
          // marginLeft: "90px",
          // zIndex: "1",
          
          }}
          onMouseOver={changeColor}
          onMouseLeave={changeColors}
        >
          {" "}
          "I'm doing great!"{" "}
        </Link>
      </div> */}
    </div>
  );
};

export default Interview;
