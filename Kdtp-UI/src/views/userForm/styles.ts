import { DsColor } from "../../ds/color.ts";

const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
};

const formWrapper = {
    width: '100%',
    height: "80%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
}

const formPanel = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '90%',
    height: '80%',
}

const subtitle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-around",
  width: "100%",
  height: "10%",
  gap: 1,
};

const userCreatedPanel = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    height: '100%',
}

const input = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-around",
  width: "100%",
  height: "30%",
};

const button = {
  color: DsColor.Black,
  width: "100%",
};

const gameBeginChip = {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
}

const usernamePanel = {
    width: "fit-content",
    height: "fit-content",
    m: 2,
}

const userSubtitle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "10%",
    p: 1
};


export default {
  container,
  formWrapper,
  formPanel,
  subtitle,
  input,
  button,
    gameBeginChip,
    usernamePanel,
    userCreatedPanel,
    userSubtitle
};
