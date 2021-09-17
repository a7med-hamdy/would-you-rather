import { RECEIVE_USERS, UPDATE_USER } from '../types.js';

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