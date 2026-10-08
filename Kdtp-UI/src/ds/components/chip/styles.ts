import type {DsColor} from "../../color.ts";

const container = (color: DsColor, borderColor: DsColor) => ({
    borderColor: borderColor,
    borderRadius: '20px',
    borderStyle: 'solid',
    borderWidth: '3px',
    backgroundColor: color,
    p: 1,
    pr: 3,
    pl: 3,
    fontSize: '12px',
})

export default {
    container,
}