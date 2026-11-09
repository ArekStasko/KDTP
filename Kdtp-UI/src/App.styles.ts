import { DsColor } from "./ds/color.ts";
import {Animations} from "./ds/animations/animations.ts";

const app = {
  minHeight: "100vh",
  display: "flex",
  textAlign: "center",
  backgroundColor: DsColor.SoftLavenderBackground,

  position: "relative",
  isolation: "isolate",
  overflow: "hidden",
};

const blob = {
  position: "absolute",
  pointerEvents: "none",
  zIndex: 0,

  animation: `
    ${Animations.blobFloat},
    ${Animations.blobMorph}
  `,
};

const content = {
  position: "relative",
  zIndex: 1,
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const blobTopLeft = {
  ...blob,
  width: "380px",
  height: "350px",
  top: "-75px",
  left: "-65px",
  backgroundColor: DsColor.TagPinkBackground,
};

const blobTopRight = {
  ...blob,
  width: "360px",
  height: "340px",
  top: "-100px",
  right: "-70px",
  backgroundColor: DsColor.TagYellowBackground,
  animationDelay: "-4s, -6s",
};

const blobBottomLeft = {
  ...blob,
  width: "390px",
  height: "350px",
  bottom: "-120px",
  left: "-65px",
  backgroundColor: DsColor.MutedLavender,
  animationDelay: "-7s, -3s",
};

const blobBottomRight = {
  ...blob,
  width: "370px",
  height: "350px",
  bottom: "-115px",
  right: "-75px",
  backgroundColor: DsColor.TagCyanBackground,
  animationDelay: "-5s, -9s",
};

export default {
  app,
  blobTopLeft,
  blobTopRight,
  blobBottomLeft,
  blobBottomRight,
  content,
};