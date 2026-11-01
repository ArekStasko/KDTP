import { Box } from "@mui/material";
import { useGetQuestionsSetQuery } from "../../api/RTK/Game.ts";
import { useEffect, useState } from "react";
import type { QuestionSet } from "../../api/models/QuestionSet.ts";
import { UserAnswers } from "./userAnswers.tsx";
import styles from "./styles.ts";

const UserAnswersContext = () => {
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

  return (
    <Box sx={styles.container}>
      {currentQuestion && <UserAnswers questionSet={currentQuestion} />}
    </Box>
  );
};

export default UserAnswersContext;
