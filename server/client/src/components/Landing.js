import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Landing = () => {
	return (
		<div>
			<Grid container direction="column" justify="center" alignItems="center">
				<Typography variant="display3" color="primary" gutterBottom>
					User Speak...
				</Typography>
				<Paper elevation={8}>
					<img src="/images/landing_670.jpg" alt="" srcset="" />
				</Paper>
			</Grid>
		</div>
	);
};

export default Landing;
