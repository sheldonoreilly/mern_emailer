//keys.js figure out what set of credentials to return

if (process.env.NODE_ENV === "production") {
	//heroku will set this
	//return production keys
	module.exports = require("./prod");
} else {
	//in dev on local machine the NODE_ENV will
	//not be set or at least not set to production
	//return development keys
	module.exports = require("./dev");
}
