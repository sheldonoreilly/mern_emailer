import { combineReducers } from "redux";

import AuthReducer from "./authReducer";

//keys returned from the combine reducers wil be the keys in state
export default combineReducers({
	auth: AuthReducer
});
