import {Box, Divider, Typography} from "@mui/material";
import styles from './styles.ts'
import {Panel} from "../../../../ds/components/panel/Panel.tsx";
import {DsColor} from "../../../../ds/color.ts";
import {Pin} from "../../../../ds/components/pin/Pin.tsx";
import {Tag} from "../../../../ds/components/tag/Tag.tsx";
import {Chip} from "../../../../ds/components/chip/Chip.tsx";
import {Avatar} from "../../../../ds/components/avatar/Avatar.tsx";
import avatarImage from "../../../../ds/test-sources/walter-test.jpg";

type PlayerMock = {
    nickname: string
}

const players: PlayerMock[] = [
    {
        nickname: "TurboSloth"
    },
    {
        nickname: "ChaosNoodle"
    },
    {
        nickname: "GigaWombat"
    },
    {
        nickname: "SparkleHog"
    },
    {
        nickname: "ZapFerret"
    },
    {
        nickname: "BlobKing99"
    },
]

const colors = [DsColor.HotPink, DsColor.LimeGreen, DsColor.ElectricYellow, DsColor.Orange, DsColor.Purple, DsColor.Cyan]
const borderColors = [DsColor.MutedPurpleText, DsColor.DarkCorrectGreen, DsColor.Orange, DsColor.Red, DsColor.MutedPurpleText, DsColor.Blue]

export const Players = () => {


    return(
        <Box sx={styles.container}>
            <Box sx={styles.top}>
                <Divider sx={styles.divider} orientation="horizontal" />
                <Panel color={DsColor.Black} sx={styles.title} backgroundColor={DsColor.ElectricYellow}>
                    LISTA GRACZY
                </Panel>
                <Divider sx={styles.divider} orientation="horizontal" />
            </Box>
            {
                players.map((player: PlayerMock, index) => (
                    <Panel sx={styles.panel(index)} color={colors[index]} backgroundColor={DsColor.White}>
                        <Box sx={styles.pane}>
                            <Tag sx={styles.tag} color={colors[index]}>
                                {"#"+(index+1)}
                            </Tag>
                            <Box sx={styles.details}>
                                <Avatar src={avatarImage} color={colors[index]} borderColor={borderColors[index]}/>
                                <Box sx={styles.status}>
                                    <Typography variant="h5">
                                        {player.nickname}
                                    </Typography>
                                    <Chip color={colors[index]} borderColor={borderColors[index]}>
                                        GOTOWY DO GRY!
                                    </Chip>
                                </Box>
                            </Box>
                        </Box>
                        <Pin color={DsColor.LimeGreen}/>
                    </Panel>
                ))
            }
        </Box>
    )
}