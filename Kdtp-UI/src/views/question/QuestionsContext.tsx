import {Box} from "@mui/material";
import {useGetPlayersQuery, useGetQuestionsSetQuery} from "../../api/RTK/Game.ts";
import {useEffect, useState} from "react";
import type {QuestionSet} from "../../api/models/QuestionSet.ts";
import {Question} from "./Question.tsx";
import styles from "./styles.ts";


const QuestionsContext = () => {
    const {data: questionsSet} = useGetQuestionsSetQuery();
    const {data: players} = useGetPlayersQuery();
    console.log(players)
    const [currentQuestion, setCurrentQuestion] = useState<QuestionSet | null>(null);

    useEffect(() => {
        if(questionsSet &&questionsSet.length > 0){
            const questionSet = questionsSet[0];
            setCurrentQuestion(questionSet)
        }
    }, [questionsSet]);

    return (
        <Box sx={styles.container}>
            {
                currentQuestion && (
                    <>
                        <Question question={currentQuestion} />
                        <Box sx={styles.usersBox}>
                            Users
                        </Box>
                    </>
                )
            }
        </Box>
    )
}

export default QuestionsContext;