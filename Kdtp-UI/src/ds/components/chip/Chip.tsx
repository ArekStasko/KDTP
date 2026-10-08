import {Box, type SxProps} from "@mui/material";
import type {DsColor} from "../../color.ts";
import styles from "./styles.ts";


type ChipProps = {
    children: React.ReactNode;
    color: DsColor;
    borderColor: DsColor;
    sx?: SxProps;
}

export const Chip = ({ children, color, borderColor, sx }: ChipProps) => {
    return (
        <Box sx={{...styles.container(color, borderColor), ...sx}} >
            {children}
        </Box>
    )
}