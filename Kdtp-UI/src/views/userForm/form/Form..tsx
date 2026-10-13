import {Panel} from "../../../ds/components/panel/Panel.tsx";
import {DsColor} from "../../../ds/color.ts";
import styles from "../styles.ts";
import {Box, Typography} from "@mui/material";
import {ButtonDs} from "../../../ds/components/button/Button.tsx";
import {Input} from "../../../ds/components/input/Input.tsx";
import {useState} from "react";


export const Form = () => {
    const [username, setUsername] = useState<string>("");

    return (
        <Panel sx={styles.formPanel} color={DsColor.HotPink} backgroundColor={DsColor.White}>
            <Box sx={styles.subtitle}>
                <Typography variant="h5">Wbijaj do gry!</Typography>
                <Typography>Wpisz swoja nazwe, zeby dolaczyc do gry.</Typography>
            </Box>
            <Box sx={styles.input}>
                <Input
                    label="Twoja nazwa"
                    placeholder="np. TurboZiemniak"
                    value={username}
                    onChange={setUsername}
                    color={DsColor.Purple}
                    backgroundColor={DsColor.SoftLavenderBackground}
                />
            </Box>
            <ButtonDs color={DsColor.Black} backgroundColor={DsColor.LimeGreen} sx={styles.button} onClick={() => console.log("click")}>
                <Typography variant="h6">
                    JOIN
                </Typography>
            </ButtonDs>
        </Panel>
    )
}