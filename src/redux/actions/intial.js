import{ receiveQuestions } from './questions.js';
import{ receiveUsers } from './users.js';
import { setAuthedUser } from './authedUser.js';

const id = 'johndoe';

export  const handleIntialData = () =>{
    return (dispatch) =>{
        return Promise.all([_getUsers, _getQuestions])
            .then(([users, questions]) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthedUser(id));
            })
    }
}

