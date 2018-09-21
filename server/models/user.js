const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
//es6 destuct mongoose object and grab property of Schema
const { Schema } = mongoose;

//a new collection with a given schema
const userSchema = new Schema({
	googleId: String
});

// Creates the collection - if doesn't already exists
//users - name of collection, userSchema - the schema of the collection
mongoose.model("users", userSchema);
