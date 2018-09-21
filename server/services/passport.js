const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
//lets get our google auth keys
const keys = require("../config/keys");

// model call with two arg defines a model
// model call below retrieves an existing model
const User = mongoose.model("users");

/**
 * serializes the mongo user.id into cookie
 */
passport.serializeUser((user, done) => {
	//we are no longer internally care about profile ids.
	//instead we now refer to the user.id which is the uid created
	//by mongo for the user document/record
	done(null, user.id);
});
/**
 * deserializes the mongo user.id 	...
 */
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

/**
 *  Register our Google auth strategy with passport
 *
 * @param {number} clientID The ID google has given our app. Notice "ID" - D is capped
 * @param {number} clientSecret The SECRET id of user.
 * @param {string} callbackURL Route for google to send back auth key
 * @param {callback} callback  profile arg contains id that we store in mongo
 */
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			//Tell GoogleStrategy - trust proxies and run https requests through them
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			//this call back is called any time user comes back from google auth flow
			//meaning everytime they login we get here.  we only want one record for each user
			//so here we create a new record ONLY if NO record exits

			//so search the Model (thinl collection) for this user
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				//we have a user - null: no error, user: the found user
				return done(null, existingUser);
			}
			// create a model instance
			const newUser = await new User({ googleId: profile.id }).save();
			done(null, newUser);
		}
	)
);
