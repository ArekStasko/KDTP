import {Box} from "@mui/material";
import {useGetQuestionsSetQuery} from "../../api/RTK/Game.ts";


const UserAnswersContext = () => {
    const {data: questionsSet} = useGetQuestionsSetQuery();

    console.log(questionsSet);

    return (
        <Box>
            User Answers Context
        </Box>
    )
}

export default UserAnswersContext;