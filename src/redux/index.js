import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    users,
    questions,
    authedUser
});

const store = createStore(rootReducer);

export default store;