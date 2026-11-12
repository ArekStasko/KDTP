import { Animations } from "../../../../ds/animations/animations.ts";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  width: "30%",
  height: "100%",
  gap: 3,
  m: 1,
};

const qrWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  height: "35%",
  pr: 6,
  pl: 6,
};

const scanMe = {
  width: "100%",
  transform: "rotate(0)",
  borderRadius: "20px",
  boxShadow: `none`,
  animation: Animations.pulseOpacity,
};

const playersStatus = {
  display: "flex",
  flexDirection: "column",
  pr: 6,
  pl: 6,
  transform: "rotate(-3deg)",
};

export default {
  container,
  qrWrapper,
  scanMe,
  playersStatus,
};
