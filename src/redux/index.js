import { combineReducers, createStore } from "redux";
import users from './reducers/users';
import questions from './reducers/questions';
import authedUser from "./reducers/authedUser";


const rootReducer = combineReducers({
    users,
    questions,
    authedUser
});

const store = createStore(rootReducer);

export default store;