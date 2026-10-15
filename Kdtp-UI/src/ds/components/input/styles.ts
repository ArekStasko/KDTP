import type { SxProps, Theme } from "@mui/material";
import type { DsColor } from "../../color.ts";

const wrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "12px",
};

const label: SxProps<Theme> = {
  fontSize: "13px",
  fontWeight: 900,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#30203F",
  textAlign: "left",
};

const container = (
  color: DsColor,
  backgroundColor: DsColor,
): SxProps<Theme> => ({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    height: "66px",
    borderRadius: "17px",
    backgroundColor,
    fontSize: "18px",
    fontWeight: 800,
    color,
    boxShadow: "0 3px 0 rgba(35, 20, 48, 0.12)",

    "& fieldset": {
      border: "4px solid #30203F",
    },

    "&:hover fieldset": {
      borderColor: "#30203F",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#30203F",
      borderWidth: "4px",
    },

    "& input": {
      padding: "18px 17px",
    },

    "& input::placeholder": {
      color: "#A58BCB",
      opacity: 1,
      fontWeight: 800,
    },
  },
});

export default {
  wrapper,
  label,
  container,
};
