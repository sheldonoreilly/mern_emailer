// prod keys in here

// heroku pulls in this file
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	//cookie key is for seeding the cookieSession (used fro encyrption)
	cookieKey: process.env.COOKIE_KEY
};
