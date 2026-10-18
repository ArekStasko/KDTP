import { Panel } from "../../../ds/components/panel/Panel.tsx";
import { DsColor } from "../../../ds/color.ts";
import styles from "../styles.ts";
import { Box, Typography } from "@mui/material";
import { ButtonDs } from "../../../ds/components/button/Button.tsx";
import { Input } from "../../../ds/components/input/Input.tsx";
import { useState } from "react";
import { type JoinGame, useJoinPlayerMutation } from "../../../api/RTK/Game.ts";
import type {Player} from "../../../api/models/Player.ts";

export type FormProps = {
  onUserJoin: (player: Player) => void;
}

export const Form = ({onUserJoin}: FormProps) => {
  const [joinGame, { isLoading }] = useJoinPlayerMutation();
  const [username, setUsername] = useState<string>("");

  const onSubmit = async () => {
    const request = {
      Username: username,
    } as JoinGame;
    const player = await joinGame(request).unwrap();
    onUserJoin(player);
  };

  return (
    <Panel
      sx={styles.formPanel}
      color={DsColor.HotPink}
      backgroundColor={DsColor.White}
    >
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
      <ButtonDs
        disabled={isLoading || username.trim().length === 0}
        color={DsColor.Black}
        backgroundColor={DsColor.LimeGreen}
        sx={styles.button}
        onClick={() => onSubmit()}
      >
        <Typography variant="h6">JOIN</Typography>
      </ButtonDs>
    </Panel>
  );
};
