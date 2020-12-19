import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
const initialState = {
    loading: true,
    data: [],
    student: {},
    error: null,
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
    composeEnhancers(applyMiddleware(thunk))(createStore)(reducer, initialState);