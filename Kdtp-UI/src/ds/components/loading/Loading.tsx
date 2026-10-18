import { Box } from "@mui/material";
import styles from "./styles";
import {Animations} from "../../animations/animations.ts";

export type LoadingProps = {
    isLoading: boolean;
};

export const Loading = ({ isLoading }: LoadingProps) => {
    if (!isLoading) return null;

    return (
        <Box sx={styles.container} role="status" aria-label="Ładowanie">
            {[0, 1, 2].map((dot) => (
                <Box
                    key={dot}
                    sx={{
                        ...styles.dot,
                        animation: Animations.loadingDots,
                        animationDelay: `${dot * 0.2}s`,
                    }}
                />
            ))}
        </Box>
    );
};