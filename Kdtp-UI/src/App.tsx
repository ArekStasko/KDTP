import "./App.css";
import {Panel} from "./ds/components/panel/Panel.tsx";
import {DsColor} from "./ds/color.ts";
import {Tag} from "./ds/components/tag/Tag.tsx";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline, Typography} from "@mui/material";
import {theme} from "./theme.ts";
import {Pin} from "./ds/components/pin/Pin.tsx";
import {Animations} from "./ds/animations/animations.ts";
import {Avatar} from "./ds/components/avatar/Avatar.tsx";

import avatarImage from "./ds/test-sources/walter-test.jpg";
import {Chip} from "./ds/components/chip/Chip.tsx";

export const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="App">
            <Panel
                sx={{
                    width: "50%",
                    height: "150px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    animation: Animations.jiggle,
                    animationDelay: `0.4s`,
                }}
                color={DsColor.HotPink}
            >
                <Tag
                    sx={{
                        width: "40px",
                        height: "40px",
                    }}
                    color={DsColor.HotPink}
                >
                    #1
                </Tag>
                <Avatar
                    src={avatarImage}
                    color={DsColor.HotPink}
                    borderColor={DsColor.SoftLavenderBackground}
                />

                <Typography variant="h4">
                    Walter Testowy
                </Typography>
                <Chip
                    color={DsColor.SoftLavenderBackground}
                    borderColor={DsColor.HotPink}
                >
                   GOTOWY DO GRY !
                </Chip>
                <Pin color={DsColor.LimeGreen}/>
            </Panel>
        </div>
    </ThemeProvider>
);