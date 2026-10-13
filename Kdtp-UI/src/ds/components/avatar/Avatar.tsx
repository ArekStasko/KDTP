import { Box, type SxProps } from "@mui/material";
import styles from "./styles.ts";
import type { DsColor } from "../../color.ts";

type AvatarProps = {
  src: string;
  color: DsColor;
  borderColor: DsColor;
  sx?: SxProps;
};

export const Avatar = ({ src, color, borderColor, sx }: AvatarProps) => {
  return (
    <Box sx={{ ...styles.container(color, borderColor), ...sx }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        src={src}
        alt="debil"
      />
    </Box>
  );
};
