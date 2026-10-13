import {DsColor} from "../../ds/color.ts";

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
    height: "60%",
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
    height: '90%',
}

const subtitle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    height: '10%',
    gap: 1
}

const input = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    height: '30%',
}

const button = {
    color: DsColor.Black,
    width: '100%',
}

export default {
    container,
    formWrapper,
    formPanel,
    subtitle,
    input,
    button
}