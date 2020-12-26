import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const globalTheme = deepMerge(grommet, {
  global: {
    font: {
      family: "Verdana",
    },
    colors: {
      brand: "#5885AF",
      focus: "#41729F",
      "accent-1": "#C3E0E5",
    },
  },
  tip: {
    content: {
      background: "light-1",
    },
  },
});

export default globalTheme;
