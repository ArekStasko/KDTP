import {Box, Typography} from "@mui/material";
import {useEffect} from "react";
import {isMobile} from "../../common/utils.ts";
import { useNavigate } from "react-router";
import styles from "./styles.ts";
import {Form} from "./form/Form..tsx";

const UserForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!isMobile()) navigate("/")
  }, []);

  return (
      <Box sx={styles.container}>
          <Box sx={styles.formWrapper}>
              <Typography>
                  KTORY DEBIL TO POWIEDZIAL
              </Typography>
              <Form />
          </Box>
        <Typography>
            ZERO SPINY, DUZO SMIECHU
        </Typography>
      </Box>
  );
};

export default UserForm;
