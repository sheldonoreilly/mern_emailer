import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";

// const Header = () => <h3>Header</h3>;
const Dashboard = () => <h3>Dashboard</h3>;
const SurveyNew = () => <h3>SurveyNew</h3>;
const Landing = () => <h3>Landing</h3>;

//app is responsible for React comp level stuff
class App extends Component {
	//here we want to learn at startu if a user is logged in
	//2 reasons to use didmount and not willmount
	// 1) didmount is the 'preferred' choice
	// 2) difference in the 2 time wise ~ nill
	componentDidMount = () => {
		// call the action creator via props that we 'connect'ed to
		// with connecct method
		this.props.fetchUser();
	};

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route path="/surveys/new" component={SurveyNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

// connectng to redux
// here we are not pass mapToProps, passing all action creators, all action creators will
// now be props on the app component
export default connect(
	null,
	actions
)(App);
