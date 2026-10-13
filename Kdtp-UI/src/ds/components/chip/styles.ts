import type { DsColor } from "../../color.ts";

const container = (color: DsColor, borderColor: DsColor) => ({
  borderColor: borderColor,
  borderRadius: "20px",
  borderStyle: "solid",
  borderWidth: "3px",
  backgroundColor: color,
  p: 0,
  pr: 2,
  pl: 2,
  fontSize: "12px",
});

export default {
  container,
};
