import {combineReducers} from 'redux';
import authReducer from './authReducer';

/*
	whatever keys we pass into combineReducers, are going to be the keys inside the state object
*/
export default combineReducers({
	auth: authReducer
});
