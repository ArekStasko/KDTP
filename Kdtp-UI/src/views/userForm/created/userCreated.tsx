import {Box, Typography} from "@mui/material";
import {Panel} from "../../../ds/components/panel/Panel.tsx";
import styles from "../styles.ts";
import {DsColor} from "../../../ds/color.ts";
import {ButtonDs} from "../../../ds/components/button/Button.tsx";
import type {Player} from "../../../api/models/Player.ts";
import {Chip} from "../../../ds/components/chip/Chip.tsx";
import {Loading} from "../../../ds/components/loading/Loading.tsx";
import {Avatar} from "../../../ds/components/avatar/Avatar.tsx";
import gary from '../../../ds/avatars/gary.png'
import {useCreateSessionMutation} from "../../../api/RTK/Game.ts";

export type UserCreatedProps = {
    player: Player
}

export const UserCreated = ({player}: UserCreatedProps) => {
    const [createSession] = useCreateSessionMutation();

    return(
        <Panel
            sx={styles.userCreatedPanel}
            color={DsColor.HotPink}
            backgroundColor={DsColor.White}
        >
            <Avatar src={gary} color={DsColor.LimeGreen} borderColor={DsColor.Black} />
            <Box sx={styles.userSubtitle}>
                <Typography variant="h5">Jestes w grze !</Typography>
                <Typography>DOLACZONO JAKO</Typography>
            </Box>
            <Panel backgroundColor={DsColor.White} color={DsColor.HotPink} sx={styles.usernamePanel}>
                <Typography variant="h6">
                    {player.username}
                </Typography>
            </Panel>
            {
                player.role == 1 ? (
                    <ButtonDs
                        disabled={false}
                        color={DsColor.Black}
                        backgroundColor={DsColor.LimeGreen}
                        sx={styles.button}
                        onClick={() => createSession()}
                    >
                        <Typography variant="h6">START</Typography>
                    </ButtonDs>
                ) : (
                    <Chip color={DsColor.Cyan} sx={styles.gameBeginChip} borderColor={DsColor.Black}>
                        <Typography variant="h6">
                            Gra wkrotce sie rozpocznie
                        </Typography>
                        <Loading isLoading={true} />
                    </Chip>
                )
            }
            <Typography>
                Nie zamykaj tej strony. Czekamy, az prowadzacy uruchomi gre.
            </Typography>
        </Panel>
    )
}