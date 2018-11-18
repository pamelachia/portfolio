import { css } from "emotion";

export const colors = {
    black: "#000000",
    deepDark: "#131313",
    lightDark: "#393939",
    superBright: "#F3F3F3",
    white: "#FFFFFF",

    maastrichtBlue: "rgba(85, 193, 247, 1)",
    babyPowder: "rgba(253, 255, 252, 1)",
    airSuperiorityBlue: "rgba(120, 161, 187, 1)",
    antiFlashWhite: "rgba(235, 245, 238, 1)",
    brightYellow: "rgba(28, 255, 206, 1)",

    maximumBlueGreen: "rgba(46, 196, 182, 1)",
    roseMadder: "rgba(231, 29, 54, 1)"
};

export const fontFamilies = {
    openSans: `"Open Sans", sans-serif`,
    quicksand: `Quicksand, sans-serif`
};

const breakpoints = {
    small: 728,
};

export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
    let prefix = typeof breakpoints[label] === "string" ? "" : "max-width:";
    let suffix = typeof breakpoints[label] === "string" ? "" : "px";
    accumulator[label] = cls =>
        css`
            @media (${prefix + breakpoints[label] + suffix}) {
                ${cls};
            }
        `;
    return accumulator;
}, {});
