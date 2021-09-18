import { RECEIVE_USERS, UPDATE_USER, UPDATE_USER_QUESTION } from '../types.js';

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

        case UPDATE_USER_QUESTION:
            return{
                ...state,
                [action.authedUser] :{
                    ...state[action.authedUser],
                    questions : state[action.authedUser].questions.concat([action.question.id])
                }
            }
        default :
            return state;
    }
}

export default users;