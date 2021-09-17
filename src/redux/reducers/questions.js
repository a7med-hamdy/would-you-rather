import {
    ANSWER_QUESTION,
    ADD_QUESTION,
    RECIEVE_QUESTIONS
} from '../types.js';

const questions = (state = {}, action) =>{
    switch(action.type){
        case RECIEVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return{
                ...state,
                [action.question.id] : action.question
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