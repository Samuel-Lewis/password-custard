import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

// https://colors.eva.design/
const colors = {
  neutral100: "#E3E8F4",
  neutral200: "#CAD2E9",
  neutral300: "#98A1BF",
  neutral400: "#5F6680",
  neutral500: "#1D202C",
  neutral600: "#151825",
  neutral700: "#0E111F",
  neutral800: "#090B19",
  neutral900: "#050715",
  neutralT100: "rgba(29, 32, 44, 0.08)",
  neutralT200: "rgba(29, 32, 44, 0.16)",
  neutralT300: "rgba(29, 32, 44, 0.24)",
  neutralT400: "rgba(29, 32, 44, 0.32)",
  neutralT500: "rgba(29, 32, 44, 0.4)",
  neutralT600: "rgba(29, 32, 44, 0.48)",
  brand100: "#FEEFD5",
  brand200: "#FEDCAC",
  brand300: "#FDC283",
  brand400: "#FBAA64",
  brand500: "#FA8231",
  brand600: "#D76123",
  brand700: "#B34518",
  brand800: "#902D0F",
  brand900: "#771C09",
  brandT100: "rgba(250, 130, 49, 0.08)",
  brandT200: "rgba(250, 130, 49, 0.16)",
  brandT300: "rgba(250, 130, 49, 0.24)",
  brandT400: "rgba(250, 130, 49, 0.32)",
  brandT500: "rgba(250, 130, 49, 0.4)",
  brandT600: "rgba(250, 130, 49, 0.48)",
  green100: "#F2FDDD",
  green200: "#E1FBBB",
  green300: "#C9F397",
  green400: "#AFE77A",
  green500: "#8BD850",
  green600: "#6AB93A",
  green700: "#4D9B28",
  green800: "#347D19",
  green900: "#21670F",
  greenT100: "rgba(139, 216, 80, 0.08)",
  greenT200: "rgba(139, 216, 80, 0.16)",
  greenT300: "rgba(139, 216, 80, 0.24)",
  greenT400: "rgba(139, 216, 80, 0.32)",
  greenT500: "rgba(139, 216, 80, 0.4)",
  greenT600: "rgba(139, 216, 80, 0.48)",
  blue100: "#DAF0FF",
  blue200: "#B5DEFF",
  blue300: "#90C9FF",
  blue400: "#75B6FF",
  blue500: "#4796FF",
  blue600: "#3374DB",
  blue700: "#2356B7",
  blue800: "#163C93",
  blue900: "#0D297A",
  blueT100: "rgba(71, 150, 255, 0.08)",
  blueT200: "rgba(71, 150, 255, 0.16)",
  blueT300: "rgba(71, 150, 255, 0.24)",
  blueT400: "rgba(71, 150, 255, 0.32)",
  blueT500: "rgba(71, 150, 255, 0.4)",
  blueT600: "rgba(71, 150, 255, 0.48)",
  yellow100: "#FEF7CD",
  yellow200: "#FEEE9B",
  yellow300: "#FDE269",
  yellow400: "#FBD544",
  yellow500: "#F9C107",
  yellow600: "#D6A005",
  yellow700: "#B38203",
  yellow800: "#906502",
  yellow900: "#775001",
  yellowT100: "rgba(249, 193, 7, 0.08)",
  yellowT200: "rgba(249, 193, 7, 0.16)",
  yellowT300: "rgba(249, 193, 7, 0.24)",
  yellowT400: "rgba(249, 193, 7, 0.32)",
  yellowT500: "rgba(249, 193, 7, 0.4)",
  yellowT600: "rgba(249, 193, 7, 0.48)",
  red100: "#FFEBDB",
  red200: "#FFD1B7",
  red300: "#FFB293",
  red400: "#FF9578",
  red500: "#FF644C",
  red600: "#DB4037",
  red700: "#B72629",
  red800: "#931824",
  red900: "#7A0E22",
  redT100: "rgba(255, 100, 76, 0.08)",
  redT200: "rgba(255, 100, 76, 0.16)",
  redT300: "rgba(255, 100, 76, 0.24)",
  redT400: "rgba(255, 100, 76, 0.32)",
  redT500: "rgba(255, 100, 76, 0.4)",
  redT600: "rgba(255, 100, 76, 0.48)",
};

/**
 * Brand: Actions, buttons, links
 * Foreground: Text and headings
 * Background: Backgrounds
 */

export const genTheme = deepMerge(grommet, {
  defaultMode: "light",
  global: {
    colors: {
      brand: "#FA8231",
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
      "background-back": {
        dark: "#111111",
        light: "#EEEEEE",
      },
      "background-front": {
        dark: "#222222",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF11",
        light: "#11111111",
      },
      text: {
        light: "#090B19",
        dark: "#E3E8F4",
      },
      "text-strong": {
        dark: "text",
        light: "#050715",
      },
      "text-weak": {
        dark: "text",
        light: "text",
      },
      "text-xweak": {
        dark: "text",
        light: "text",
      },
      border: {
        dark: "#CAD2E9",
        light: "#5F6680",
      },
      control: {
        light: "brand",
        dark: "brand",
      },
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": {
        light: "#FF644C",
        dark: "#B72629",
      },
      "status-warning": {
        light: "#FBD544",
        dark: "#D6A005",
      },
      "status-ok": {
        light: "#8BD850",
        dark: "#4D9B28",
      },
      "status-unknown": {
        light: "#CAD2E9",
        dark: "#1D202C",
      },
      "status-disabled": {
        light: "#4796FF",
        dark: "#2356B7",
      },
      focus: {
        light: "#4796FF",
        dark: "#4796FF",
      },
    },
    font: {
      family: "Helvetica",
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
  },
  layer: {
    background: {
      dark: "#111111",
      light: "#FFFFFF",
    },
  },
  tip: {
    content: {
      background: colors.neutral100,
    },
  },
});
