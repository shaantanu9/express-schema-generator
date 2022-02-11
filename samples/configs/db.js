// import mongoose 
const mongoose = require('mongoose');   


// create connect function to connect to database
const connect = () => {
    return mongoose.connect('mongodb+srv://')
};

//exporting the connect function in index.js
module.exports = connect;
