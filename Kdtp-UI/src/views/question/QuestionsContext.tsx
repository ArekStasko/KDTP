import {Box} from "@mui/material";
import {useGetQuestionsSetQuery} from "../../api/RTK/Game.ts";


const QuestionsContext = () => {
    const {data: questionsSet} = useGetQuestionsSetQuery();

    console.log(questionsSet);

    return (
        <Box>
            Question Context
        </Box>
    )
}

export default QuestionsContext;