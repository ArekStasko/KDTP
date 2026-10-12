import {Box, Typography} from "@mui/material";
import styles from "./styles.ts"
import {QRCodeSVG} from "qrcode.react";
import {Panel} from "../../../../ds/components/panel/Panel.tsx";
import {DsColor} from "../../../../ds/color.ts";
import {Tag} from "../../../../ds/components/tag/Tag.tsx";

export const Status = () => {

    return(
        <Box sx={styles.container}>
            <Panel
                backgroundColor={DsColor.White}
                color={DsColor.HotPink}
                sx={styles.qrWrapper}
            >
                <Tag
                    color={DsColor.LimeGreen}
                    sx={styles.scanMe}
                >
                    SCAN ME
                </Tag>
                <QRCodeSVG
                    value="https://twoja-apka.pl/join"
                    size={220}
                    level="H"
                    bgColor="#ffffff"
                    fgColor="#190b2b"
                    marginSize={2}
                />
            </Panel>

            <Panel
                backgroundColor={DsColor.Cyan}
                color={DsColor.Black}
                sx={styles.playersStatus}
            >
                <Typography variant="h4">
                    6
                </Typography>
                <Typography>
                    GRACZY DOLACZONYCH !
                </Typography>
            </Panel>
        </Box>
    )
}