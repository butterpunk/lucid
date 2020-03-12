import { combineReducers } from "redux";
import questions from "./questions";
import quiz from "./quiz";
import { getRandom } from '../utils/helpers.js'

export default combineReducers({ questions, quiz });

export const getNextItem = (state) => {
    //Depending on where we are in the game determines your next Item
    if(state.quiz.total_answered >= state.quiz.total_length){
        return {page_type:'quiz'}
    }else if(state.questions.items){
        return {page_type:'question'}
    }else{
        return {};
    }
}

export const getQuestion = (state) => {
    if(state.questions.items){
        //TODO - there's a possibility of convergence here. Would need to add an omit array to getRandom
        let question = Object.assign({}, state.questions.items[state.quiz.random_index]);
        question = filterQuestion(question);
        return question;
    }else{
        return {};
    }
}

export const getQuiz = (state) => {
    return state.quiz;
}

const filterQuestion = (question) => {
    switch(question.type){
        case 'multiple':
            return addAnswer(question);
        default:
            return question;
    }
}

const addAnswer = (question) => {
    let newIndex = getRandom(0, question.incorrect_answers.length);
    question.incorrect_answers.splice(newIndex, 0, question.correct_answer);
    return question;
}