import type { ReactNode } from "react";
import { Button, type SxProps } from "@mui/material";
import styles from "./styles.ts";
import type { DsColor } from "../../color.ts";

type ButtonProps = {
  children: ReactNode;
  color: DsColor;
  backgroundColor: DsColor;
  onClick: () => void;
  disabled: boolean;
  sx?: SxProps;
};

export const ButtonDs = ({
  children,
  color,
  backgroundColor,
  onClick,
  disabled,
  sx,
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      sx={{ ...styles.container(color, backgroundColor), ...sx }}
    >
      {children}
    </Button>
  );
};
