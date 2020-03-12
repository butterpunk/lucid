import {
    GET_QUESTIONS_REQUEST,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_FAILURE,
} from "../actions/";

export default(state={
}, action) => {
    switch (action.type) {
        case GET_QUESTIONS_REQUEST:
            return state;
        case GET_QUESTIONS_SUCCESS:
            return {...state, ...{items: action.payload, current_index: 0}}
        case GET_QUESTIONS_FAILURE:
            return state;
        default:
            return state;
    }
}