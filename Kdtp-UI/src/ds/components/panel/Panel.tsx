import type { ReactNode } from "react";
import { Box, type SxProps } from "@mui/material";
import styles from "./styles.ts";
import type { DsColor } from "../../color.ts";

type PanelProps = {
  children: ReactNode;
  color: DsColor;
  backgroundColor: DsColor;
  sx?: SxProps;
};

export const Panel = ({ children, color, backgroundColor, sx }: PanelProps) => {
  return (
    <Box sx={{ ...styles.container(color, backgroundColor), ...sx }}>
      {children}
    </Box>
  );
};
