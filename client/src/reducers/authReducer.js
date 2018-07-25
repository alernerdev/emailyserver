import { FETCH_USER} from '../actions/types';

export default function(state = null, action) {

	switch(action.type) {
		case FETCH_USER:
			// we return either false or the user model.
			// and at startup, when the login status is still being determined,
			// default state is null
			var ret = action.payload || false;
		return ret;

		default:
			return state;
	}
}
