import {
    ANSWER_QUESTION,
    ADD_QUESTION,
    RECIEVE_QUESTIONS
} from '../types.js';

import { _saveQuestionAnswer } from '../utils/_DATA.js';
import { _saveQuestion } from '../utils/_DATA.js';
import { updateUser, updateUserQuestions } from './users';


export const answerQuestion =(question, answer, authedUser) =>{
    return{
        type : ANSWER_QUESTION,
        question,
        answer,
        authedUser
    }
}

export const handleAnswerQuestion = (question, answer) =>{
    return  (dispatch, getState) =>{
        const { authedUser } = getState();
        dispatch(answerQuestion(question, answer, authedUser));
        dispatch(updateUser(question, answer, authedUser));
        let qid = question;
        return _saveQuestionAnswer({authedUser, qid, answer})
            .catch((e) => {console.error(e)})
    }
}

export const addQuestion =(question) =>{
    return{
        type : ADD_QUESTION,
        question
    }
}

export const handleAddQuestion = (one, two, authedUser, users) =>{
    let question = {
        optionOneText : one,
        optionTwoText : two,
        author : authedUser
    }
    return(dispatch) =>{
        return _saveQuestion(question)
            .then((formattedQuestion) => {
                dispatch(addQuestion(formattedQuestion))
                dispatch(updateUserQuestions(authedUser, formattedQuestion))
            })
    }
}


export const receiveQuestions =(questions) =>{
    return{
        type : RECIEVE_QUESTIONS,
        questions
    }
}