import {
    ANSWER_QUESTION,
    ADD_QUESTION,
    RECEIVE_QUESTIONS
} from '../redux/types.js';

const questions = (state = {}, action) =>{
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return{
                ...state,
                ...action.question
            }
        case ANSWER_QUESTION:
            return{
                ...state,
                //to be done
            }
        default :
            return state;
    }
}

export default questions;