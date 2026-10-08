import {DsColor} from "../../color.ts";

const container = (color: DsColor) => ({
    borderWidth: '3px',
    borderStyle: 'solid',
    borderRadius: '20px',
    borderColor: DsColor.Black,
    boxShadow: `6px 6px 0px 2px ${color}`,
    p: '20px'
})

export default {
    container,
}