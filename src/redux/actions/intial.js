import{ receiveQuestions } from './questions.js';
import{ receiveUsers } from './users.js';
import { _getUsers, _getQuestions } from '../utils/_DATA.js';



export  const handleIntialData = () =>{
    return (dispatch) =>{
        return Promise.all([_getUsers(), _getQuestions()])
            .then(([users, questions]) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
            })
    }
}

