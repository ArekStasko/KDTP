import { Box, Divider } from "@mui/material";
import styles from "./styles.ts";
import { Panel } from "../../../../ds/components/panel/Panel.tsx";
import { DsColor } from "../../../../ds/color.ts";
import { PlayerPanel } from "./PlayerPanel.tsx";
import type { Player } from "../../../../api/models/Player.ts";

export type PlayersProps = {
  players: Player[];
}

export const Players = ({players}: PlayersProps) => {

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
      {
        players?.map((player: Player, index) => (
            <PlayerPanel player={player} index={index} />
        ))
      }
    </Box>
  );
};
