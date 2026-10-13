import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { theme } from "./theme.ts";
import styles from "./App.styles.ts";
import { MainRouting } from "./routing/routing.tsx";

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={styles.app}>
      <MainRouting />
    </Box>
  </ThemeProvider>
);
