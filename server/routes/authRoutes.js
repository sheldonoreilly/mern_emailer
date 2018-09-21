const passport = require("passport");

module.exports = app => {
	/**
	 * Request to google for user info (profile, passport).
	 * passport.authenticate will have access to the 'code' google sent back which is the key necessary to
	 * then access user info.
	 */
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	/**
	 * Handler for google 'calling back' with the route we passed to google.
	 */
	app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
		res.redirect("/surveys");
	});

	//testing
	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});

	app.get("/api/logout", (req, res) => {
		req.logout();
		//after logout - redirect to Landing page
		res.redirect("/");
	});
};
