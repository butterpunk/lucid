export const START_QUIZ = "START_QUIZ";
export const CHANGE_QUESTION_INDEX = "CHANGE_QUESTION_INDEX";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ANSWER_QUESTION_CORRECT = "ANSWER_QUESTION_CORRECT";
export const ANSWER_QUESTION_INCORRECT = "ANSWER_QUESTION_INCORRECT";


export const answerQuestion = (correct_answer, user_answer) => dispatch => {
    dispatch({type: ANSWER_QUESTION});
    if(correct_answer === user_answer){
        dispatch({type: ANSWER_QUESTION_CORRECT});
    }else{
        dispatch({type: ANSWER_QUESTION_INCORRECT});
    }
}
export const startQuiz = () => dispatch =>{
    dispatch(randomizeQuestionIndex());
    dispatch({type: START_QUIZ });
}

export const randomizeQuestionIndex = () => (dispatch, getState) =>{
    dispatch({
        type: CHANGE_QUESTION_INDEX,
        payload: {length: getState().questions.items.length}
    });
}