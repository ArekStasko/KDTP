import styles from "./styles.ts";
import { DsColor } from "../../../../ds/color.ts";
import { Box, Typography } from "@mui/material";
import { Tag } from "../../../../ds/components/tag/Tag.tsx";
import { Avatar } from "../../../../ds/components/avatar/Avatar.tsx";
import { Chip } from "../../../../ds/components/chip/Chip.tsx";
import { Pin } from "../../../../ds/components/pin/Pin.tsx";
import { Panel } from "../../../../ds/components/panel/Panel.tsx";
import type { Player } from "../../../../api/models/Player.ts";
import {avatars} from "../../../../ds/avatars/avatars.ts";

export type PlayerPanelProps = {
  player: Player;
  index: number;
};

const tagColors = [
  DsColor.TagPinkBackground,
  DsColor.TagLimeBackground,
  DsColor.TagYellowBackground,
  DsColor.TagOrangeBackground,
  DsColor.TagPurpleBackground,
  DsColor.TagCyanBackground,
];

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

export const PlayerPanel = ({ player, index }: PlayerPanelProps) => {
  return (
    <Panel
      sx={styles.panel(index)}
      color={colors[index]}
      backgroundColor={DsColor.White}
    >
      <Box sx={styles.pane}>
        <Tag sx={styles.tag} color={colors[index]}>
          {"#" + (index + 1)}
        </Tag>
        <Box sx={styles.details}>
          <Avatar
            src={avatars[index]}
            color={colors[index]}
            borderColor={borderColors[index]}
          />
          <Box sx={styles.status}>
            <Typography variant="h5">{player.username}</Typography>
            <Chip color={tagColors[index]} borderColor={borderColors[index]}>
              GOTOWY DO GRY!
            </Chip>
          </Box>
        </Box>
      </Box>
      <Pin color={DsColor.LimeGreen} />
    </Panel>
  );
};
