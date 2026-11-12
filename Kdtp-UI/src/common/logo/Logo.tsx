import {Box, type SxProps} from "@mui/material";
import LogoImage from "../../ds/Logo.png"
import styles from "./styles.ts";

export type LogoProps = {
    sx?: SxProps;
}

export const Logo = ({sx}: LogoProps) => {

    return(
        <Box sx={styles.container}>
            <Box
                component="img"
                src={LogoImage}
                alt="KDTP Logo"
                loading="eager"
                sx={{...sx}}
            />
        </Box>
    )
}