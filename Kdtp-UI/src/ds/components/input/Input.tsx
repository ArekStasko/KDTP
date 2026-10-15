import { Box, TextField, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import styles from "./styles.ts";
import type { DsColor } from "../../color.ts";

type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  color: DsColor;
  backgroundColor: DsColor;
  onChange: (value: string) => void;
  sx?: SxProps<Theme>;
};

export const Input = ({
  label,
  placeholder,
  value,
  color,
  backgroundColor,
  onChange,
  sx,
}: InputProps) => {
  return (
    <Box sx={styles.wrapper}>
      {label && <Typography sx={styles.label}>{label}</Typography>}

      <TextField
        fullWidth
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        variant="outlined"
        sx={[
          styles.container(color, backgroundColor),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
      />
    </Box>
  );
};
