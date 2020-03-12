import axios from 'axios';
import { randomizeQuestionIndex } from './quiz.js';
export const GET_QUESTIONS_REQUEST = "GET_QUESTIONS_REQUEST";
export const GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS";
export const GET_QUESTIONS_FAILURE = "GET_QUESTIONS_FAILURE";

export const ITERATE_QUESTION = 'ITERATE_QUESTION';

const requestGetQuestions = () => {
    return { 
        type: GET_QUESTIONS_REQUEST
    }
}

const getQuestionsSuccess = (questions) => {
    return { 
        type: GET_QUESTIONS_SUCCESS,
        payload: questions
    }
}

export const getAllQuestions = () => dispatch => { 
    dispatch(requestGetQuestions());
    axios.get(`http://localhost:4000/api/questions`)
    .then(function (response) {
        //TODO - ERROR HANDLING
        dispatch(getQuestionsSuccess(response.data.results));
        dispatch(randomizeQuestionIndex());
    })
    .catch(function (error) {
    console.log(error);
    })
    .then(function () {});
}