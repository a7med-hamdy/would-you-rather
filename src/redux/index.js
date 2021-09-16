import { combineReducers, createStore } from "redux";
import users from './reducers/users';
import questions from './reducers/questions';
import authedUser from "./reducers/authedUser";
import middleware from "./middleware";

const rootReducer = combineReducers({
    users,
    questions,
    authedUser
});

const store = createStore(rootReducer, middleware);

export default store;