import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { connect } from "react-redux";

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};

function renderContent(auth, classes) {
	console.log("auth :", auth);
	switch (auth) {
		case null:
			return <Button color="inherit">Waiting</Button>;
		case false:
			return (
				<Button href="/auth/google" color="inherit">
					Login with Google
				</Button>
			);
		default:
			return (
				<Button href="/api/logout" color="inherit">
					Logout
				</Button>
			);
	}
}

class Header extends Component {
	render() {
		const { classes, auth } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="title" color="inherit" className={classes.grow}>
							Campaigner
						</Typography>
						{renderContent(auth, classes)}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
