import { computed, reactive } from "vue";
import { darkMode } from "../src/index";
export const theme = reactive({
    colors: null,
    // base
    white:"#FFFFFF",
    black:"#000000",
    // text
    text1: computed(() => darkMode.value ? "#FFFFFF" : "#000000"),
    text2: computed(() => darkMode.value ? "#C3C5CB" : "#565A69"),
    text3: computed(() => darkMode.value ? "#6C7284" : "#888D9B"),
    text4: computed(() => darkMode.value ? "#565A69" : "#C3C5CB"),
    // backgrounds / greys
    
    // backgrounds / greys
    bg0: computed(() => darkMode.value ? '#191B1F' : '#FFF'),
    bg1: computed(() => darkMode.value ? '#212429' : '#F7F8FA'),
    bg2: computed(() => darkMode.value ? '#2C2F36' : '#EDEEF2'),
    bg3: computed(() => darkMode.value ? '#40444F' : '#CED0D9'),
    bg4: computed(() => darkMode.value ? '#565A69' : '#888D9B'),
 
    //borders
    bd0: computed(() => darkMode.value ? '#191B1F' : '#CED0D9'),
    bd1: computed(() => darkMode.value ? '#212429' : '#CED0D9'),
    bd2: computed(() => darkMode.value ? '#2C2F36' : '#EDEEF2'),
    bd3: computed(() => darkMode.value ? '#40444F' : '#CED0D9'),

    //specialty colors
    modalBG: computed(() => darkMode.value ? "rgba(0,0,0,.425)" : "rgba(0,0,0,0.3)"),
    //primary colorsrgb(209 250 229)

    primary1: computed(() => darkMode.value ? '#2172E5' : '#1e7e6b'),
    //primary2: computed(() => darkMode.value ? '#3680E7' : '#78baad'),
    primary3: computed(() => darkMode.value ? '#4D8FEA' : '#90c3b9'),
    primary4: computed(() => darkMode.value ? '#376bad70' : '#a4d2c9'),
    primary5: computed(() => darkMode.value ? '#153d6f70' : '#c2eae2'),
    // color text

 
    // color text
   
    primaryText1: computed(() => darkMode.value ? '#5090ea' : '#1e7e6b'),

    // other
    red1: "#FD4040",
    green1: "#27AE60",
    yellow2: "#F3841E",
    blue1: "#a78253",
    //shadows
    shadow1: computed(() => darkMode.value ? "#000" : "#2F80ED"),
});
