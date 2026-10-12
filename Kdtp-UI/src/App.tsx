import "./App.css";
import {ThemeProvider} from "@mui/material/styles";
import {Box, CssBaseline} from "@mui/material";
import {theme} from "./theme.ts";
import Dashboard from "./views/dashboard/Dashboard.tsx";
import {Stripe} from "./common/stripe/Stripe.tsx";
import {DsColor} from "./ds/color.ts";
import styles from "./App.styles.ts";

export const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={styles.app}>
            <Stripe text="KDTP - KTORY DEBIL TO POWIEDZIAL" color={DsColor.ElectricYellow} top />
                <Dashboard />
            <Stripe text="GRASZ Z DEBILAMI" color={DsColor.Purple} />
        </Box>
    </ThemeProvider>
);