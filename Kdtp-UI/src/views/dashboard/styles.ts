const container = {
  position: "relative",
  isolation: "isolate",
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
  height: "100%",
  p: 2,
  overflow: "hidden",
};

const content = {
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "stretch",
  width: "100%",
  height: "100%",
};

export default {
  container,
  content,
};
