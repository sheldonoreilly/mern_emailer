import React, { Component, Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import {connect} from 'react-redux';
import * as actions from '../actions'

const text = {
	display: "inline",
	marginRight: 10
};

class Payments extends Component {
	render() {
		return (
			<Fragment>
				<Typography style={text} color="inherit" variant="subheadingcaption" gutterBottom align="center">
					Purchase Credits
				</Typography>
				<StripeCheckout
					name={"Emailer"}
					description={"$5 for 5 survey credits"}
					amount={500}
					token={token => props.handleToken(token)} 
					stripeKey={process.env.REACT_APP_STRIPE_KEY}
				>
					<Button variant="fab" mini color="secondary">
						<AddIcon />
					</Button>
				</StripeCheckout>
			</Fragment>
		);
	}
}

export default connect(null, actions)(Payments);
