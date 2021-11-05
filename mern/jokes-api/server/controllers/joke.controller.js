const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(jokes => res.json({ jokes: jokes}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(joke => res.json({ joke: joke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({ joke: newJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
