import {DsColor} from "../../color.ts";

const container = (color: DsColor) => ({
    borderRadius: '100%',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderColor: DsColor.Black,
    backgroundColor: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: `0px 0px 8px 2px ${color}`,
    width: '22px',
    height: '22px',
})

export default {
    container,
}