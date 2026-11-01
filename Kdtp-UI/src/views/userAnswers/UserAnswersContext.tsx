import { Box } from "@mui/material";
import { useGetQuestionsSetQuery } from "../../api/RTK/Game.ts";
import { useEffect, useState } from "react";
import type { QuestionSet } from "../../api/models/QuestionSet.ts";
import { UserAnswers } from "./userAnswers.tsx";
import styles from "./styles.ts";
import {useEvent} from "../../common/eventContext/eventContext.tsx";

const UserAnswersContext = () => {
  const { roundCompleted, clearSubmittedPlayers, clearRoundCompleted } = useEvent();
  const { data: questionsSet } = useGetQuestionsSetQuery();
  const [currentQuestion, setCurrentQuestion] = useState<QuestionSet | null>(
    null,
  );

  useEffect(() => {
    if (questionsSet && questionsSet.length > 0) {
      const questionSet = questionsSet[0];
      setCurrentQuestion(questionSet);
    }
  }, [questionsSet]);

  useEffect(() => {
    if(!questionsSet || !currentQuestion) return;
    const currentQuestionIndex = questionsSet.findIndex(q => q.question.id === currentQuestion.question.id);
    if(currentQuestionIndex == questionsSet.length-1) return;
    clearSubmittedPlayers();
    clearRoundCompleted();
    setCurrentQuestion(questionsSet[currentQuestionIndex+1]);
  }, [roundCompleted]);

  return (
    <Box sx={styles.container}>
      {currentQuestion && <UserAnswers questionSet={currentQuestion} />}
    </Box>
  );
};

export default UserAnswersContext;
