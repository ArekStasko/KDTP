import {Box, Typography} from "@mui/material";
import styles from "./styles.ts";
import type {QuestionSet} from "../../api/models/QuestionSet.ts";
import {Panel} from "../../ds/components/panel/Panel.tsx";
import {DsColor} from "../../ds/color.ts";

export type QuestionProps = {
    question: QuestionSet
}

const colors = [
    DsColor.HotPink,
    DsColor.LimeGreen,
    DsColor.ElectricYellow,
    DsColor.Orange,
];

export const Question = ({question}: QuestionProps) => {
    return (
        <Box sx={styles.questionBox}>
            <Panel backgroundColor={DsColor.White} color={DsColor.Purple}>
                <Typography variant="h5">
                    {question.question.text}
                </Typography>
            </Panel>
            <Box sx={styles.answersBox}>
                {
                    question.answers.map((answer, i) => (
                        <Panel sx={styles.answer} backgroundColor={DsColor.White} color={colors[i]}>
                            <Typography variant="h6">
                                {answer.text}
                            </Typography>
                        </Panel>
                    ))
                }
            </Box>
        </Box>
    )
}