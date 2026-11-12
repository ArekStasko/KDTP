import { Box } from "@mui/material";
import {useGetPlayersQuery, useGetQuestionsSetQuery} from "../../api/RTK/Game.ts";
import { useEffect, useState } from "react";
import type { QuestionSet } from "../../api/models/QuestionSet.ts";
import { UserAnswers } from "./userAnswers.tsx";
import styles from "./styles.ts";
import {useEvent} from "../../common/eventContext/eventContext.tsx";
import {LoadingScreen} from "../../common/loadingScreen/LoadingScreen.tsx";

const UserAnswersContext = () => {
  const { roundCompleted, clearSubmittedPlayers, clearRoundCompleted } = useEvent();
  const { data: players, refetch } = useGetPlayersQuery();
  const { data: questionsSet, isLoading } = useGetQuestionsSetQuery();
  const [gameCompleted, setGameCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionSet | null>(
    null,
  );

  useEffect(() => {
    if(gameCompleted) refetch();
  }, [gameCompleted]);

  useEffect(() => {
    if (questionsSet && questionsSet.length > 0) {
      const questionSet = questionsSet[0];
      setCurrentQuestion(questionSet);
    }
  }, [questionsSet]);

  useEffect(() => {
    if(!questionsSet || !currentQuestion || !players || roundCompleted.length !== players.length) return;
    const currentQuestionIndex = questionsSet.findIndex(q => q.question.id === currentQuestion.question.id);
    if(currentQuestionIndex == questionsSet.length-1)
    {
      setGameCompleted(true);
      return;
    }
    setTimeout(() => {
      clearSubmittedPlayers();
      clearRoundCompleted();
      setCurrentQuestion(questionsSet[currentQuestionIndex+1]);
    }, 5000);
  }, [roundCompleted]);

  return (
    <Box sx={styles.container}>
      {
        <LoadingScreen isLoading={isLoading} />
      }
      {(!gameCompleted && currentQuestion && !isLoading) && <UserAnswers questionSet={currentQuestion} />}
    </Box>
  );
};

export default UserAnswersContext;
