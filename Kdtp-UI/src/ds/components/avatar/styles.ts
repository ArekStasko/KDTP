import { DsColor } from "../../color.ts";

const container = (color: DsColor, borderColor: DsColor) => ({
  borderWidth: "3px",
  maxWidth: "100px",
  maxHeight: "100px",
  borderStyle: "solid",
  borderRadius: "20px",
  borderColor: borderColor,
  backgroundColor: color,
  boxShadow: `2px 2px 0px 1px ${DsColor.Black}`,
  transform: "rotate(5deg)",
  p: 1,
});

export default {
  container,
};
