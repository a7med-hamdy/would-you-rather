import { SET_AUTHED_USER } from '../types.js';

export const setAuthedUser = (id) =>{
    return{
        type : SET_AUTHED_USER,
        id
    }
}