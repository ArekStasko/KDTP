import type {Question} from "./Question.ts";
import type {Answer} from "./Answer.ts";

export type QuestionSet = {
    question: Question;
    answers: Answer[];
}