import { Box } from "@mui/material";
import { Players } from "./components/players/Players.tsx";
import { Status } from "./components/status/Status.tsx";
import styles from "./styles.ts";
import { isMobile } from "../../common/utils.ts";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile()) navigate("/join");
  }, []);

  return (
      <Box sx={styles.container}>
        <Box sx={styles.content}>
          <Status />
          <Players />
        </Box>
      </Box>
  );
};

export default Dashboard;
