import { Box, Divider } from "@mui/material";
import styles from "./styles.ts";
import { Panel } from "../../../../ds/components/panel/Panel.tsx";
import { DsColor } from "../../../../ds/color.ts";
import { PlayerPanel } from "./PlayerPanel.tsx";

export type PlayerMock = {
  nickname: string;
};

const players: PlayerMock[] = [
  {
    nickname: "TurboSloth",
  },
  {
    nickname: "ChaosNoodle",
  },
  {
    nickname: "GigaWombat",
  },
  {
    nickname: "SparkleHog",
  },
  {
    nickname: "ZapFerret",
  },
  {
    nickname: "BlobKing99",
  },
];

export const Players = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.top}>
        <Divider sx={styles.divider} orientation="horizontal" />
        <Panel
          color={DsColor.Black}
          sx={styles.title}
          backgroundColor={DsColor.ElectricYellow}
        >
          LISTA GRACZY
        </Panel>
        <Divider sx={styles.divider} orientation="horizontal" />
      </Box>
      {players.map((player: PlayerMock, index) => (
        <PlayerPanel player={player} index={index} />
      ))}
    </Box>
  );
};
