// using axios for ajax calls
import axios from 'axios';

import { FETCH_USER } from './types';

export const fetchUser = () =>
	// reduxThunk inspects all values returned from action cretors and when a function
	// is returned, it is invoked and a dispatch function is passed in
	async (dispatchFn) => {
		const res = await axios.get('/api/current_user');
		// the action gets dispatched to all reducers
		dispatchFn({type: FETCH_USER, payload: res.data});
	};

export const handleStripeToken = (token) =>
	async (dispatchFn) => {
		const res = await axios.post('/api/stripe', token);
		// user's account will have been updated, so by getting the user again,
		// we are getting the latest acct balance
		dispatchFn({type: FETCH_USER, payload: res.data});
	};
