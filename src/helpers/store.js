import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import userReducer from '../reducers/users.reducer';
import authenticationReducer from '../reducers/authentication.reducer';
import registrationReducer from '../reducers/registation.reducer';
import alertReducer from '../reducers/alert.reducers';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({ userReducer, authenticationReducer, registrationReducer, alertReducer });

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)

export default store;