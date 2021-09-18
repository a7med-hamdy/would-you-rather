import { RECEIVE_USERS, UPDATE_USER, UPDATE_USER_QUESTION } from '../types.js';

export const receiveUsers =(users) =>{
    return{
        type : RECEIVE_USERS,
        users
    }
}

export const updateUser = (question, answer, authedUser) => {
    return{
        type : UPDATE_USER,
        question,
        answer,
        authedUser
    }
}

export const updateUserQuestions = (authedUser, question) =>{
    return{
        type : UPDATE_USER_QUESTION,
        authedUser,
        question,
    }
}