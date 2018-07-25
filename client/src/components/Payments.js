import React, { Component } from "react";
import {connect} from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import * as actions from "../actions";

class Payments extends Component {
	render() {
		// amount is in pennies
		// during the build process, REACT_APP_STRIPE_KEY is substituted with a real key value
		console.log("stripe key is :" + process.env.REACT_APP_STRIPE_KEY);

		return (
			<StripeCheckout
				name="Emaily"
				description="5 dollars for 5 credits"
				ampount={500}
				token={token => this.props.handleStripeToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payments);
