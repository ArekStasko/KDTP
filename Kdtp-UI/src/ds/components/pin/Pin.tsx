import {Box, type SxProps} from "@mui/material";
import type {DsColor} from "../../color.ts";
import styles from "./styles.ts";

type PinProps = {
    color: DsColor
    sx?: SxProps;
};

export const Pin = ({color, sx}: PinProps) => {
    return(
        <Box sx={{...styles.container(color), ...sx}}/>
    )
}


