import {Box, Typography} from "@mui/material";
import {useGetPlayersQuery} from "../../api/RTK/Game.ts";
import {Panel} from "../../ds/components/panel/Panel.tsx";
import {DsColor} from "../../ds/color.ts";
import {LoadingScreen} from "../../common/loadingScreen/LoadingScreen.tsx";
import styles from "./styles.ts";
import {Avatar} from "../../ds/components/avatar/Avatar.tsx";
import {avatars} from "../../ds/avatars/avatars.ts";

const colors = [
    DsColor.HotPink,
    DsColor.LimeGreen,
    DsColor.ElectricYellow,
    DsColor.Orange,
    DsColor.Purple,
    DsColor.Cyan,
];

const borderColors = [
    DsColor.MutedPurpleText,
    DsColor.DarkCorrectGreen,
    DsColor.Orange,
    DsColor.Red,
    DsColor.MutedPurpleText,
    DsColor.Blue,
];


const Results = () => {
    const { data: players, isLoading } = useGetPlayersQuery();

    return(
        <Box sx={styles.container}>
            <LoadingScreen isLoading={isLoading} />
            <Typography sx={styles.title} variant="h3">Wyniki</Typography>
            <Typography sx={styles.title} variant="h5">Klasyfikacja najlepszych debili</Typography>
            <Panel sx={styles.wrapper} color={DsColor.ElectricYellow} backgroundColor={DsColor.White}>
            {!isLoading && players && players.map((player, index) => (
                <Panel
                    sx={styles.panel}
                    color={colors[index]}
                    backgroundColor={DsColor.White}
                >
                            <Avatar
                                src={avatars[index]}
                                color={colors[index]}
                                borderColor={borderColors[index]}
                            />
                    <Typography>
                        {player.username}
                    </Typography>
                    <Typography>
                        {player.score} PKT
                    </Typography>
                </Panel>
            ))}
            </Panel>
        </Box>
    )
}

export default Results;