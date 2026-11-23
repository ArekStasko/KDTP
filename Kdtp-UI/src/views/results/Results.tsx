import {Box, Typography} from "@mui/material";
import {useGetPlayersQuery} from "../../api/RTK/Game.ts";
import {Panel} from "../../ds/components/panel/Panel.tsx";
import {DsColor} from "../../ds/color.ts";
import {LoadingScreen} from "../../common/loadingScreen/LoadingScreen.tsx";
import styles from "./styles.ts";
import {Avatar} from "../../ds/components/avatar/Avatar.tsx";
import {avatars} from "../../ds/avatars/avatars.ts";
import {useEffect, useRef} from "react";
import confetti from "canvas-confetti";

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
    const hasFired = useRef(false);

    useEffect(() => {
        if (isLoading || !players || hasFired.current) return;

        hasFired.current = true;

        const options = {
            particleCount: 90,
            spread: 65,
            startVelocity: 55,
            gravity: 1.1,
            ticks: 220,
            scalar: 1.1,
            zIndex: 2000,
            disableForReducedMotion: true,
            colors: [
                DsColor.HotPink,
                DsColor.LimeGreen,
                DsColor.ElectricYellow,
                DsColor.Orange,
                DsColor.Purple,
                DsColor.Cyan,
            ],
        };

        confetti({
            ...options,
            angle: 60,
            origin: { x: 0, y: 0.65 },
        });

        confetti({
            ...options,
            angle: 120,
            origin: { x: 1, y: 0.65 },
        });

    }, [isLoading, players]);

    return(
        <Box sx={styles.container}>
            <LoadingScreen isLoading={isLoading} />
            <Typography sx={styles.title} variant="h3">Wyniki</Typography>
            <Typography sx={styles.title} variant="h5">Klasyfikacja najlepszych debili</Typography>
            <Panel sx={styles.wrapper} color={DsColor.ElectricYellow} backgroundColor={DsColor.White}>
            {!isLoading && players && players.toSorted((a,b) => b.score - a.score).map((player, index) => (
                <Panel
                    key={index}
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