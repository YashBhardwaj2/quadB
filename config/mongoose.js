const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quadB_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open',function(){
    console.log('Connect to DB');
});

module.exports = db;