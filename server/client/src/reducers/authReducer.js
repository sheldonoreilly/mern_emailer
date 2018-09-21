import { FETCH_USER } from "../actions/types";

//setting null default value to state is the case that the reducer is called by redux startup
//before we fetch user so we dont know if we have logged in user yet
export default function(state = null, action) {
	switch (action.type) {
		// 3 potential returns
		// 1) null -- dont know if user there yet
		// 2) payload = we have user
		// 3) false - we dont have a user
		case FETCH_USER: {
			//if the user is logged in we get an object for payload
			//if user not logged in we get an '' string
			//so we return payload or false
			return action.payload || false;
		}
		default:
			return state;
	}
}
