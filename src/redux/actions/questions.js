import {
    ANSWER_QUESTION,
    ADD_QUESTION,
    RECEIVE_QUESTIONS
} from '../redux/types.js';

export const answerQuestion =(question) =>{
    return{
        type : ANSWER_QUESTION,
        question
    }
}

export const addQuestion =(question) =>{
    return{
        type : ADD_QUESTION,
        question
    }
}

export const receiveQuestions =(questions) =>{
    return{
        type : RECEIVE_QUESTIONS,
        questions
    }
}