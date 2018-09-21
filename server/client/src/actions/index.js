import axios from "axios";
import { FETCH_USER } from "./types";
// export const fetchUser = () =>
//thunk gives us access to the dispatch - which allows us to dispatch
//the action when we want - not auto like it is without thunk.
//When do we want to dispatch?  After the promise is resolved/completed (then).
//so with access to dispatch we delay the dispatching until resolved

//this is an arrow - so remember that the function is being implicitly returned (no return statement necessary)
/*dispatch =>
		axios.get("/api/current_user").then(response =>
			dispatch({
				type: FETCH_USER,
				payload: response
			})
        );
        */
//so in the end the wethod would look like
/*
    export const fetchUser = () => dispatch => axios.get("/api/current_user")
        .then(response => dispatch({ type: FETCH_USER, payload: response }));
    */
//is === to...
// so the fetchUser function takes no params - the fetch user function returns
// a function that takes the dispatch in as an argument.
/*export const fetchUser = () => {
        return {
        function(dispatch) {
            axios.get("/api/current_user")
            .then(response => dispatch({ type: FETCH_USER, payload: response }));
        }
    }
    }*/

//refactor to async/await
//find the function that is causing async behavior, add the 'async' keyword
//find promises and add keyword 'await'

//now acts like synced code.  async the function
//await and assign the response
//then call dispatch with the response
export const fetchUser = () =>
	async function(dispatch) {
		const response = await axios.get("/api/current_user");
		dispatch({ type: FETCH_USER, payload: response.data });
	};
