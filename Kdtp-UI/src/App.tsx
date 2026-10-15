import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { theme } from "./theme.ts";
import styles from "./App.styles.ts";
import { MainRouting } from "./routing/routing.tsx";
import { useCallback } from "react";
import { useWebPubSub } from "./api/services/useWebPubSub.ts";
import { useAppDispatch } from "./api/useAppDispatch.ts";
import { GameApi } from "./api/RTK/Game.ts";
import type { Player } from "./api/models/Player.ts";

export const App = () => {
  const dispatch = useAppDispatch();

  const handlePlayerJoined = useCallback(
    (event: {
      type: "PlayerJoined";
      player: {
        id: string;
        username: string;
        role: string;
      };
    }) => {
      dispatch(
        GameApi.util.updateQueryData("getPlayers", undefined, (players) => {
          if (players.some((player) => player.id === event.player.id)) {
            return;
          }

          const player = {
            id: event.player.id,
            username: event.player.username,
            playerRole: event.player.role,
            hasSubmittedAnswer: false,
          } as Player;

          players.push({
            ...player,
            hasSubmittedAnswer: false,
          });
        }),
      );
    },
    [dispatch],
  );

  useWebPubSub(handlePlayerJoined);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles.app}>
        <MainRouting />
      </Box>
    </ThemeProvider>
  );
};
