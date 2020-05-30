import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default store = createStore(
    applyMiddleware(thunkMiddleware)
);