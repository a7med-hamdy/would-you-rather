import {
    ANSWER_QUESTION,
    ADD_QUESTION,
    RECIEVE_QUESTIONS
} from '../types.js';

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
        type : RECIEVE_QUESTIONS,
        questions
    }
}