import { SET_AUTHED_USER } from '../redux/types.js';

export const setAuthedUser =(id) =>{
    return{
        type : SET_AUTHED_USER,
        id
    }
}