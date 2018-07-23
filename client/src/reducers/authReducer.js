import { FETCH_USER} from '../action/types';

export default function(state = null, action) {

	switch(action.type) {
		case FETCH_USER:
			// we return either false or the user model.
			// and at startup, when the login status is still being determined, 
			// default state is null
			return action.payload || false;
		break;

		default:
			return state;
	}
}
