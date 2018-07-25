import React, { Component } from 'react';
import { connect } from 'react-redux'; // connectivity between react and redux libraries
import { Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	// this.props contains auth property attached here by the code at the bottom of the file

	renderContent() {
		switch (this.props.auth) {
			case null:
			return ""; // we dont know if the user is logged in or not

			case false:
				return (
					<li><a href="/auth/google">Login with Google</a></li>
				);

			default:
				return [
						<li key="1"><Payments /></li>,
						<li key="2"><a href="/api/logout">Logout</a></li>
				];

		}
	}

	render() {
		// link navigates to a different route rendered by ReactRouter as opposed to anchor
		// which navigates to a different html page
		return <div>
			<nav>
				<div className="nav-wrapper">
					<Link to={ this.props.auth ? '/surveys' : '/' }	className="left brand-logo">Emaily</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		</div>
	}
}

function mapStateToProps(state) {
	// return object that will be passed to the Header as props
	return { auth: state.auth };
}

// this statement allows us to access actions as props inside the app
export default connect(mapStateToProps)(Header);

