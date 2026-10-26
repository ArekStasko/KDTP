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
import type {SessionStartedEvent} from "./api/services/webPubSubEvents.ts";
import { useNavigate } from "react-router";
import {isMobile} from "./common/utils.ts";
import {Stripe} from "./common/stripe/Stripe.tsx";
import {DsColor} from "./ds/color.ts";
import {Animations} from "./ds/animations/animations.ts";
import zany from "./ds/emoticons/zany.png";
import claun from "./ds/emoticons/claun.png";
import expolindHead from "./ds/emoticons/exploding-head.png";
import laugh from "./ds/emoticons/laugh.png";
import poop from "./ds/emoticons/poop.png";

const decorations = [
    { src: zany, top: "5%", left: "6%", rotate: "-15deg" },
    { src: claun, top: "82%", left: "53%", rotate: "12deg" },
    { src: expolindHead, top: "4%", right: "6%", rotate: "10deg" },
    { src: laugh, bottom: "30%", right: "73%", rotate: "-10deg" },
    { src: poop, bottom: "7%", left: "8%", rotate: "15deg" },
];

export const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlePlayerJoined = useCallback(
    (event: {
      type: "PlayerJoined";
      player: {
        id: string;
        username: string;
        role: number;
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
            role: event.player.role,
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

    const handleSessionStarted = useCallback((event: SessionStartedEvent) => {
        if(isMobile()){
            navigate(`/user/${event.sessionId}`);
            return;
        }
        navigate(`/session/${event.sessionId}`);
    }, []);

    useWebPubSub({
        onPlayerJoined: handlePlayerJoined,
        onGameStarted: handleSessionStarted,
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={styles.app}>
          <Stripe
              text="KDTP - KTORY DEBIL TO POWIEDZIAL"
              color={DsColor.ElectricYellow}
              top
          />
          {decorations.map((item, index) => (
              <Box
                  key={index}
                  component="img"
                  src={item.src}
                  alt=""
                  aria-hidden="true"
                  sx={{
                      position: "absolute",
                      ...item,
                      width: 64,
                      height: "auto",
                      zIndex: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                      animation: Animations.pulseRotate,
                  }}
              />
          ))}
        <MainRouting />
          <Stripe text="GRASZ Z DEBILAMI" color={DsColor.Purple} />
      </Box>
    </ThemeProvider>
  );
};
