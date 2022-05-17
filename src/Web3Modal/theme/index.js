
import { inject, computed, reactive } from "vue";
import { css } from "vue3-styled-components";
export * from "@/Web3Modal/theme/components";
export { default as ExternalLink } from "@/Web3Modal/theme/ExternalLink";
import { useDark, useToggle } from "@vueuse/core";
export const darkMode = useDark();
export const toggleDark = useToggle(darkMode);
export const setDarkMode = (dark) => (darkMode.value = dark);
export const MEDIA_WIDTHS = {
    upToExtraSmall: 500,
    upToSmall: 720,
    upToMedium: 960,
    upToLarge: 1280,
};
const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce(
    (accumulator, size) => {
        accumulator[size] = (a, b, c) => css`
			@media (max-width: ${MEDIA_WIDTHS[size]}px) {
				${css(a, b, c)}
			}
		`;
        return accumulator;
    },
    {},
);

const white = "#FFFFFF";
const black = "#000000";

export const theme = reactive({
    colors:null,
    // base
    white,
    black,
    // text
    text1: computed(() => darkMode.value ? "#FFFFFF" : "#000000"),
    text2: computed(() => darkMode.value ? "#C3C5CB" : "#565A69"),
    text3: computed(() => darkMode.value ? "#6C7284" : "#888D9B"),
    text4: computed(() => darkMode.value ? "#565A69" : "#C3C5CB"),
    //text5: computed(() => darkMode.value ? "#2C2F36" : "#EDEEF2"),


    // backgrounds / greys
    bg0: computed(() => darkMode.value ? '#191B1F' : '#FFF'),
    bg1: computed(() => darkMode.value ? '#212429' : '#F7F8FA'),
    bg2: computed(() => darkMode.value ? '#2C2F36' : '#EDEEF2'),
    bg3: computed(() => darkMode.value ? '#40444F' : '#CED0D9'),
    bg4: computed(() => darkMode.value ? '#565A69' : '#888D9B'),
    //bg5: computed(() => darkMode.value ? '#6C7284' : '#888D9B'),
    //bg6: computed(() => darkMode.value ? '#1A2028' : '#6C7284'),
    //bg7: computed(() => darkMode.value ? '#191B1F' : '#FFF'),

    //borders
    bd0: computed(() => darkMode.value ? '#191B1F' : '#FFF'),
    bd1: computed(() => darkMode.value ? '#212429' : '#F7F8FA'),
    bd2: computed(() => darkMode.value ? '#2C2F36' : '#EDEEF2'),
    bd3: computed(() => darkMode.value ? '#40444F' : '#CED0D9'),


    //specialty colors
    modalBG: computed(() => darkMode.value ? "rgba(0,0,0,.425)" : "rgba(0,0,0,0.3)"),
    //advancedBG: computed(() => darkMode.value ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.6)"),

    //primary colors

    primary1: computed(() => darkMode.value ? '#2172E5' : '#E8006F'),
    //primary2: computed(() => darkMode.value ? '#3680E7' : '#FF8CC3'),
    primary3: computed(() => darkMode.value ? '#4D8FEA' : '#FF99C9'),
    primary4: computed(() => darkMode.value ? '#376bad70' : '#F6DDE8'),
    primary5: computed(() => darkMode.value ? '#153d6f70' : '#FDEAF1'),



    // color text
    primaryText1: computed(() => darkMode.value ? '#5090ea' : '#D50066'),

    // secondary colors
    //secondary1: computed(() => darkMode.value ? '#2172E5' : '#E8006F'),
    //secondary2: computed(() => darkMode.value ? '#17000b26' : '#F6DDE8'),
    //secondary3: computed(() => darkMode.value ? '#17000b26' : '#FDEAF1'),

    // other
    red1: "#FD4040",
    //red2: "#F82D3A",
    //red3: "#D60000",
    //red4: "#B91C1C",
    green1: "#27AE60",
    //yellow1: "#FFE270",
    yellow2: "#F3841E",
    blue1: "#a78253",
    //blue4: computed(() => darkMode.value ? "#153d6f70" : "#C4D9F8"),
    //blue5: computed(() => darkMode.value ? "#153d6f70" : "#EBF4FF"),
    grids: {
        sm: 8,
        md: 12,
        lg: 24,
    },
    //shadows
    shadow1: computed(() => darkMode.value ? "#000" : "#2F80ED"),
    // media queries
    mediaWidth: {
        ...mediaWidthTemplates
    },
    // css snippets
    flexColumnNoWrap: css`
			display: flex;
			flex-flow: column nowrap;
		`,
    flexRowNoWrap: css`
			display: flex;
			flex-flow: row nowrap;
		`,
});

export function useTheme() {
    const theme = inject("theme");
    if (!theme) throw new Error("No Theme provided!");
    return theme;
}

export { default as TYPE } from "@/Web3Modal/theme/TextWrapper";
