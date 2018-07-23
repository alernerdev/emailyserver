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

