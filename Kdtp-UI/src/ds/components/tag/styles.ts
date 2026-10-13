import { DsColor } from "../../color.ts";

const container = (color: DsColor) => ({
  borderRadius: "100%",
  borderStyle: "solid",
  borderWidth: "3px",
  borderColor: DsColor.Black,
  backgroundColor: color,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: `2px 3px 0px 1px ${DsColor.Black}`,
  transform: "rotate(-10deg)",
});

export default {
  container,
};
