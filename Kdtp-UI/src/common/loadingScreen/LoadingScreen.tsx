import {Panel} from "../../ds/components/panel/Panel.tsx";
import {DsColor} from "../../ds/color.ts";
import {Typography} from "@mui/material";
import {Loading} from "../../ds/components/loading/Loading.tsx";
import styles from "./styles.ts";

export type LoadingProps = {
    isLoading: boolean;
}

export const LoadingScreen = ({isLoading}: LoadingProps) => {

    if(!isLoading) return;

    return (
        <Panel backgroundColor={DsColor.White} color={DsColor.Purple} sx={styles.container}>
            <Typography variant="h3">
                Szykujemy runde !
            </Typography>
            <Typography variant="h5">
                Pobieramy pytania i odpowiedzi
            </Typography>
            <Loading isLoading={isLoading} />
            <Typography>
                To potrwa tylko chwile... moze
            </Typography>
        </Panel>
    )
}