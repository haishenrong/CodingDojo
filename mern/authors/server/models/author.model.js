const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name is required'],
        minLength: [3, 'Authors name must be at least 3 characters long.']
    },
    birthYear: { 
        type: Number,
        min: [0, "Oral Tradition dictates this minimum of 0 AD."],
        max: [2021, "The book has not been written yet."]
    },
    book: { type: String, minLength:[1, "Book title must be at least 1 character long"]}
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', AuthorSchema);