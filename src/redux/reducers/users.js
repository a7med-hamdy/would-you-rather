import { RECEIVE_USERS, UPDATE_USER } from '../types.js';

const users = (state = {}, action) =>{
    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }

        case UPDATE_USER :
            return{
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    answers : {
                        ...state[action.authedUser].answers,
                        [action.question] : action.answer 
                    }
                }
            }
        default :
            return state;
    }
}

export default users;