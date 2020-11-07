import React from "react";
import Nav from "../../../../Nav/Nav";
import { InterviewContents } from "../../../InterviewStyles";

const Sorry = () => {
  return (
    <div>
      <Nav />
      <InterviewContents></InterviewContents>
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
          title={"Lagging"}
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

export default Sorry;
