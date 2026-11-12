import {Box, Typography} from "@mui/material";
import { Players } from "./components/players/Players.tsx";
import { Status } from "./components/status/Status.tsx";
import styles from "./styles.ts";
import { isMobile } from "../../common/utils.ts";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import {useGetPlayersQuery} from "../../api/RTK/Game.ts";
import {Logo} from "../../common/logo/Logo.tsx";
import {Panel} from "../../ds/components/panel/Panel.tsx";
import {DsColor} from "../../ds/color.ts";

const Dashboard = () => {
  const { data: players, isLoading, isError } = useGetPlayersQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile()) navigate("/join");
  }, []);

  return (
    <Box sx={styles.container}>
        <Box sx={styles.logoWrapper}>
            <Logo sx={styles.logo} />
            <Panel sx={styles.logoPanel} color={DsColor.Black} backgroundColor={DsColor.HotPink}>
                <Typography>
                    KTORY DEBIL TO POWIEDZIAL
                </Typography>
            </Panel>
        </Box>
      <Box sx={styles.content}>
        {
          (!isLoading && !isError && players) && (
              <>
                  <Status players={players} />
              <Players players={players} />
              </>
          )
        }
      </Box>
    </Box>
  );
};

export default Dashboard;
