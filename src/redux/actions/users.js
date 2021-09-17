import { RECEIVE_USERS } from '../types.js';

export const receiveUsers =(users) =>{
    return{
        type : RECEIVE_USERS,
        users
    }
}