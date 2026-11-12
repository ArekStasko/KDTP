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
import {useEffect, useState} from "react";
import {Submitted} from "./submitted/Submitted.tsx";
import {Animations} from "../../ds/animations/animations.ts";

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

  useEffect(() => setSubmitted(false), [questionSet])

  const onSubmitAnswer = async (answer: Answer) => {
    const playerId = getPlayerId();
    const request = {
      PlayerId: playerId,
      Answer: answer,
    } as SubmitAnswer;
    await submitAnswer(request);
    setTimeout(() => {
      setSubmitted(true);
    }, 1000)
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
            key={answer.id}
          sx={{
            color: DsColor.Black,
            animation: submitted ? Animations.cartoonSlideOut : Animations.cartoonSlideIn,
            animationDelay: `${0.15 + index * 0.12}s`,
        }}
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
