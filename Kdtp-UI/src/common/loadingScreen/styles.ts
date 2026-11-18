import {theme} from "../../theme.ts";

const container = {
    width: '40%',
    height: '50%',
    p: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        height: '70%',
    }

}

export default {
    container,
}