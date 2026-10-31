import {Box} from "@mui/material";
import {useGetPlayersQuery, useGetQuestionsSetQuery} from "../../api/RTK/Game.ts";
import {useEffect, useState} from "react";
import type {QuestionSet} from "../../api/models/QuestionSet.ts";


const UserAnswersContext = () => {
    const {data: questionsSet} = useGetQuestionsSetQuery();
    const [currentQuestion, setCurrentQuestion] = useState<QuestionSet | null>(null);

    useEffect(() => {
        if(questionsSet &&questionsSet.length > 0){
            const questionSet = questionsSet[0];
            setCurrentQuestion(questionSet)
        }
    }, [questionsSet]);

    return (
        <Box>
            User Answers Context
        </Box>
    )
}

export default UserAnswersContext;