import { Box, type SxProps } from "@mui/material";
import type { ReactNode } from "react";
import type { DsColor } from "../../color.ts";
import styles from "./styles.ts";

type TagProps = {
  children: ReactNode;
  color: DsColor;
  sx?: SxProps;
};

export const Tag = ({ children, color, sx }: TagProps) => {
  return <Box sx={{ ...styles.container(color), ...sx }}>{children}</Box>;
};
