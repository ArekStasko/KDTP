import {DsColor} from "../../ds/color.ts";
import {Animations} from "../../ds/animations/animations.ts";

const container = {
  position: "relative",
  isolation: "isolate",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  gap: 8,
  width: "100%",
  height: "100%",
  mt: 10,
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

const logoWrapper = {
  display: 'flex',
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
}

const logoPanel = {
  width: "fit-content",
  color: DsColor.White,
  borderRadius: '10px',
  transform: "rotate(-3deg)",
  transformOrigin: "center center",
  willChange: "transform",
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
}

const logo = {
  display: "block",
  width: "100%",
  maxWidth: "450px",
  height: "auto",
  objectFit: "contain",
  transformOrigin: "center center",
  animation: Animations.logoPulseRotate,
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
}

export default {
  container,
  content,
  logoWrapper,
  logoPanel,
  logo,
};
