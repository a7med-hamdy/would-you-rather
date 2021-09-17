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
                [action.question] :{
                    ...state[action.question],
                    [action.answer] : {
                        ...state[action.question][action.answer],
                        votes : state[action.question][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default :
            return state;
    }
}

export default questions;