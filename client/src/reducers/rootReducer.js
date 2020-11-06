import { combineReducers } from 'redux';
import authReducer from './authReducer';
import logInReducer from './logInReducer';


export default combineReducers({
    authReducer,
    logInReducer
});