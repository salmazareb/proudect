const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
name: {type: String, minLength: 3, required: true} 	
},
{
	timestamps: true,
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
