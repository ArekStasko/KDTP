import { Box, Typography } from "@mui/material";
import {
  useGetPlayersQuery,
  useGetQuestionsSetQuery,
} from "../../api/RTK/Game.ts";
import { useEffect, useMemo, useState } from "react";
import type { QuestionSet } from "../../api/models/QuestionSet.ts";
import { Question } from "./Question.tsx";
import styles from "./styles.ts";
import { DsColor } from "../../ds/color.ts";
import { Chip } from "../../ds/components/chip/Chip.tsx";
import { Panel } from "../../ds/components/panel/Panel.tsx";
import { Avatar } from "../../ds/components/avatar/Avatar.tsx";
import { avatars } from "../../ds/avatars/avatars.ts";
import { Pin } from "../../ds/components/pin/Pin.tsx";
import { useEvent } from "../../common/eventContext/eventContext.tsx";

const colors = [
  DsColor.HotPink,
  DsColor.LimeGreen,
  DsColor.ElectricYellow,
  DsColor.Orange,
  DsColor.Purple,
  DsColor.Cyan,
];

const borderColors = [
  DsColor.MutedPurpleText,
  DsColor.DarkCorrectGreen,
  DsColor.Orange,
  DsColor.Red,
  DsColor.MutedPurpleText,
  DsColor.Blue,
];

const QuestionsContext = () => {
  const { roundCompleted, submittedPlayers, clearSubmittedPlayers, clearRoundCompleted } = useEvent();
  const { data: questionsSet } = useGetQuestionsSetQuery();
  const { data: players, refetch } = useGetPlayersQuery();
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
    clearSubmittedPlayers();
    clearRoundCompleted();
    setCurrentQuestion(questionsSet[currentQuestionIndex+1]);
  }, [roundCompleted]);

  const PlayersState = useMemo(() => {
    const submittedCount = submittedPlayers.length;

    return (
      <>
        <Typography variant="h6">GLOSOWANIE</Typography>
        <Box sx={styles.usersCount}>
          <Typography>{submittedCount}/6 ZAGLOSOWALO</Typography>
        </Box>
        <Box sx={styles.usersChip}>
          {players?.map((p, index) => (
            <Chip
              sx={styles.userChip}
              color={(submittedPlayers.includes(p.id) || roundCompleted.length !== 0 ) ? DsColor.TagCyanBackground : DsColor.TagGrayBackground}
              borderColor={(submittedPlayers.includes(p.id) || roundCompleted.length !== 0 ) ? DsColor.LimeGreen : DsColor.TagGrayBorder}
            >
              <Avatar
                src={avatars[index]}
                color={colors[index]}
                borderColor={borderColors[index]}
                sx={styles.avatar}
              />
              <Typography>{p.username}</Typography>
              <Pin color={DsColor.LimeGreen} />
            </Chip>
          ))}
        </Box>
      </>
    );
  }, [players, submittedPlayers, roundCompleted]);

  return (
    <Box sx={styles.container}>
      {(!gameCompleted && currentQuestion) && (
        <Box sx={styles.wrapper}>
          <Question question={currentQuestion} />
          <Box sx={styles.usersBox}>
            <Panel
              sx={styles.usersPanel}
              color={DsColor.LimeGreen}
              backgroundColor={DsColor.White}
            >
              {PlayersState}
            </Panel>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default QuestionsContext;
