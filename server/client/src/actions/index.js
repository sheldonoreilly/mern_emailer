import axios from "axios";
import { FETCH_USER } from "./types";
//now acts like synced code.  async the function
//await and assign the response
//then call dispatch with the response
export const fetchUser = () =>
	async function(dispatch) {
		const response = await axios.get("/api/current_user");
		dispatch({ type: FETCH_USER, payload: response.data });
    };
    
    export const handleToken = token => async dispatch => {
        const res = await axios.post('/api/stripe', token);
        dispatch ({type:FETCH_USER, payload: res.data})
    }
