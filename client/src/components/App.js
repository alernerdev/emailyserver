import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { connect } from "react-redux"; // connectivity between react and redux libraries

import Header from "./Header";
import * as actions from "../actions";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveryNew = () => <h2>SurveryNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
	componentDidMount() {
		// figure out if a user is logged in
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div className="container">
						<Header />
						<Route path="/" exact component={Landing} />
						<Route path="/surveys" exact component={Dashboard} />
						<Route path="/surveys/new" component={SurveryNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

// this statement allows us to access actions as props inside the app
export default connect(null, actions)(App);
