const mongoose = require('mongoose');
mongoose.set('runValidators', true); 
mongoose.connect("mongodb://localhost/exam_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true, })
    .then(() => 
        console.log("Established a connection to the database"))
    .catch(err => 
        console.log("Something went wrong when connecting to the database", err));
