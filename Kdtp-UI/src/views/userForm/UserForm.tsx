import { Box, Typography } from "@mui/material";
import {useEffect, useState} from "react";
import { isMobile } from "../../common/utils.ts";
import { useNavigate } from "react-router";
import styles from "./styles.ts";
import { Form } from "./form/Form..tsx";
import type {Player} from "../../api/models/Player.ts";
import {UserCreated} from "./created/userCreated.tsx";

const UserForm = () => {
    const [player, setPlayer] = useState<Player>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile()) navigate("/");
  }, []);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.formWrapper}>
        <Typography>KTORY DEBIL TO POWIEDZIAL</Typography>
          {
              player ? (
                <UserCreated player={player} />
              ) : (
                  <Form onUserJoin={(player: Player) => setPlayer(player)} />
              )
          }
      </Box>
      <Typography>ZERO SPINY, DUZO SMIECHU</Typography>
    </Box>
  );
};

export default UserForm;
