const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/user");
require("./services/passport");


mongoose.connect(keys.mongoURI).then(mes => {
	console.log("DB Connection Succesful");
});

//import auth routes
const authRouters = require("./routes/authRoutes");

//create our app
const app = express();

//middleware - sessions.  Expire 30 days
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
//middleware - passport
app.use(passport.initialize());
app.use(passport.session());

/**
 * Route setup.
 * require("./routes/authRoutes")(app) - first call returns a function (we exported)
 * The returned function then takes app 'in' as a argument
 */
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Server is running on 5000");
});
