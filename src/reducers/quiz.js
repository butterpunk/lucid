import {
    START_QUIZ,
    ANSWER_QUESTION,
    ANSWER_QUESTION_CORRECT,
    ANSWER_QUESTION_INCORRECT,
    CHANGE_QUESTION_INDEX
} from "../actions/";

import { getRandom } from '../utils/helpers.js'

export default(state={
    total_length: 3,
    correct: 0,
    incorrect: 0,
    total_answered: 0,
    random_index: 0
}, action) => {
    switch (action.type) {
        case START_QUIZ:
            //TODO - this should clear the state
            return {...state,  correct: 0, incorrect: 0, total_answered: 0};
        case ANSWER_QUESTION:
            return state;
        case ANSWER_QUESTION_CORRECT:
            return {...state, correct: state.correct + 1, total_answered: state.total_answered + 1};
        case ANSWER_QUESTION_INCORRECT:
            return {...state, incorrect: state.incorrect + 1, total_answered: state.total_answered + 1};
        case CHANGE_QUESTION_INDEX:
            let nextQuestionIndex = getRandom(0, action.payload.length - 1);
            return {...state, random_index: nextQuestionIndex}
        default:
            return state;
    }
}