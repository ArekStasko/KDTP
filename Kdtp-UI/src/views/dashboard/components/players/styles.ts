import { Animations } from "../../../../ds/animations/animations.ts";
import { DsColor } from "../../../../ds/color.ts";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  width: "50%",
  height: "90%",
  m: 1,
};

const top = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
};

const divider = {
  borderColor: DsColor.Black,
  borderWidth: 2,
  width: "35%",
  fontWeight: "bold",
  fontsize: "14px",
};

const title = {
  boxShadow: `2px 2px 0px 1px`,
  p: 2,
  pr: 3,
  pl: 3,
};

const panel = (delay: number) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "90%",
  height: "12%",
  animation: Animations.jiggle,
  animationDelay: `${delay} * 0.3s`,
});

const tag = {
  width: "40px",
  height: "40px",
};

const pane = {
  width: "60%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

const details = {
  width: "80%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
};

const status = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "12px",
};

export default {
  container,
  top,
  divider,
  title,
  panel,
  tag,
  pane,
  details,
  status,
};
