import { DsColor } from "../../ds/color.ts";
import { Animations } from "../../ds/animations/animations.ts";

const container = (color: DsColor, top?: boolean) => ({
  width: "100%",
  overflow: "hidden",
  p: 1,
  backgroundColor: color,
  borderBottom: top ? `3px solid ${DsColor.Black}` : "none",
  borderTop: top ? "none" : `3px solid ${DsColor.Black}`,
});

const track = (top?: boolean) => ({
  display: "flex",
  width: "max-content",
  whiteSpace: "nowrap",
  animation: Animations.marqueeRight,
  animationDirection: top ? "reverse" : "normal",
});

const textGroup = {
  display: "flex",
  flexShrink: 0,
  alignItems: "center",
};

const textItem = {
  flexShrink: 0,
  paddingRight: "64px",
};

export default {
  container,
  track,
  textGroup,
  textItem,
};
