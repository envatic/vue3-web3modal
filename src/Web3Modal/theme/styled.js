import {
    space as spacex,
    layout as layoutx,
    typography as typographyx,
    color as colorx,
    flexbox as flexboxx
} from "styled-system";
export const space = (props) => spacex(Object.fromEntries(Object.entries(props).
    filter(([, val]) => val != undefined)))
export const layout = (props) => layoutx(Object.fromEntries(Object.entries(props).
    filter(([, val]) => val != undefined)))
export const typography = (props) => typographyx(Object.fromEntries(Object.entries(props).
    filter(([, val]) => val != undefined)))
export const color = (props) => colorx(Object.fromEntries(Object.entries(props).
    filter(([, val]) => val != undefined)))
export const flexbox = (props) => flexboxx(Object.fromEntries(Object.entries(props).
    filter(([, val]) => val != undefined)))