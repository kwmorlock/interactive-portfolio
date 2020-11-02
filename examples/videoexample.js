//How to make a responsive embedded video

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
</div>;
