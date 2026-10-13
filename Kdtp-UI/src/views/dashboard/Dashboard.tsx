import { Box } from "@mui/material";
import { Players } from "./components/players/Players.tsx";
import { Status } from "./components/status/Status.tsx";
import styles from "./styles.ts";
import zany from "../../ds/emoticons/zany.png";
import claun from "../../ds/emoticons/claun.png";
import expolindHead from "../../ds/emoticons/exploding-head.png";
import laugh from "../../ds/emoticons/laugh.png";
import poop from "../../ds/emoticons/poop.png";
import { Animations } from "../../ds/animations/animations.ts";
import { Stripe } from "../../common/stripe/Stripe.tsx";
import { DsColor } from "../../ds/color.ts";
import {isMobile} from "../../common/utils.ts";
import { useNavigate } from "react-router";
import {useEffect} from "react";

const decorations = [
  { src: zany, top: "5%", left: "6%", rotate: "-15deg" },
  { src: claun, top: "42%", left: "3%", rotate: "12deg" },
  { src: expolindHead, top: "4%", right: "6%", rotate: "10deg" },
  { src: laugh, bottom: "35%", right: "3%", rotate: "-10deg" },
  { src: poop, bottom: "3%", left: "8%", rotate: "15deg" },
];

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(isMobile()) navigate("/join")
    }, []);

  return (
    <>
      <Stripe
        text="KDTP - KTORY DEBIL TO POWIEDZIAL"
        color={DsColor.ElectricYellow}
        top
      />
      <Box sx={styles.container}>
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
        <Box sx={styles.content}>
          <Status />
          <Players />
        </Box>
      </Box>
      <Stripe text="GRASZ Z DEBILAMI" color={DsColor.Purple} />
    </>
  );
};

export default Dashboard;
