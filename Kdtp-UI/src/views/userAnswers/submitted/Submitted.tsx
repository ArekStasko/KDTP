import {Box, Typography} from "@mui/material";
import styles from "../../userForm/styles.ts";
import {DsColor} from "../../../ds/color.ts";
import {Avatar} from "../../../ds/components/avatar/Avatar.tsx";
import gary from "../../../ds/avatars/gary.png";
import {Panel} from "../../../ds/components/panel/Panel.tsx";
import {Chip} from "../../../ds/components/chip/Chip.tsx";
import {Loading} from "../../../ds/components/loading/Loading.tsx";


export const Submitted = () => {
    return (
        <Panel
            sx={styles.userCreatedPanel}
            color={DsColor.HotPink}
            backgroundColor={DsColor.White}
        >
            <Avatar
                src={gary}
                color={DsColor.LimeGreen}
                borderColor={DsColor.Black}
            />
            <Box sx={styles.userSubtitle}>
                <Typography variant="h5">Podales odpowiedz !</Typography>
            </Box>
                <Chip
                    color={DsColor.Cyan}
                    sx={styles.gameBeginChip}
                    borderColor={DsColor.Black}
                >
                    <Typography variant="h6">Czekamy na koniec rundy</Typography>
                    <Loading isLoading={true} />
                </Chip>
            <Typography>
                Nie zamykaj tej strony.
            </Typography>
        </Panel>
    )
}