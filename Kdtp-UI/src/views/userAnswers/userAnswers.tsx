import { Box } from "@mui/material";
import type { QuestionSet } from "../../api/models/QuestionSet.ts";
import { ButtonDs } from "../../ds/components/button/Button.tsx";
import { DsColor } from "../../ds/color.ts";
import styles from "./styles.ts";
import type { Answer } from "../../api/models/Answer.ts";
import { getPlayerId } from "../../api/services/cookieService.ts";
import {
  type SubmitAnswer,
  useSubmitAnswerMutation,
} from "../../api/RTK/Game.ts";
import {useState} from "react";
import {Submitted} from "./submitted/Submitted.tsx";

export type UserAnswersProps = {
  questionSet: QuestionSet;
};

const backgroundColors = [
  DsColor.TagPinkBackground,
  DsColor.TagCyanBackground,
  DsColor.TagYellowBackground,
  DsColor.TagOrangeBackground,
  DsColor.TagPurpleBackground,
  DsColor.TagLimeBackground,
];

const colors = [
  DsColor.MutedPurpleText,
  DsColor.DarkCorrectGreen,
  DsColor.Orange,
  DsColor.Red,
  DsColor.MutedPurpleText,
  DsColor.Blue,
];

export const UserAnswers = ({ questionSet }: UserAnswersProps) => {
  const [submitAnswer] = useSubmitAnswerMutation()
  const [submitted, setSubmitted] = useState<boolean>();

  const onSubmitAnswer = async (answer: Answer) => {
    const playerId = getPlayerId();
    const request = {
      PlayerId: playerId,
      Answer: answer,
    } as SubmitAnswer;
    await submitAnswer(request);
    setSubmitted(true);
  };

  return (
    <Box sx={styles.answersBox}>
      {
        submitted && (
            <Submitted />
          )
      }
      {!submitted && questionSet.answers.map((answer, index) => (
        <ButtonDs
          sx={{ color: DsColor.Black }}
          disabled={false}
          color={colors[index]}
          backgroundColor={backgroundColors[index]}
          onClick={() => onSubmitAnswer(answer)}
        >
          {answer.text}
        </ButtonDs>
      ))}
    </Box>
  );
};
