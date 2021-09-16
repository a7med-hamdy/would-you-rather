import { RECEIVE_USERS } from '../redux/types.js';

export const receiveUsers =(users) =>{
    return{
        type : RECEIVE_USERS,
        users
    }
}