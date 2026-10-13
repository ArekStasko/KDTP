import { createTheme } from "@mui/material/styles";
import ComicSans from "./ds/fonts/comic-sans.woff";

export const theme = createTheme({
  typography: {
    fontFamily: '"ComicSans"',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "ComicSans",
          src: `url(${ComicSans}) format("woff2")`,
          fontWeight: "normal",
          fontStyle: "normal",
        },
      },
    },
  },
});
