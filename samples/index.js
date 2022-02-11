const express = require('express');  
const app = express();
app.use(express.json());

const connect = require('./configs/db.js');

/// Models Ends


// const postController = require('./controllers/post.controller');
// const tagController = require('./controllers/tag.controller');
const userController = require('./controllers/user.controller');

/////////////////

app.use('/user', userController);
app.use('/tag', tagController);
app.use('/post', postController);



////////////////////////////////

// Start Listening the Server

port = process.env.PORT || 3000;

app.listen(port,async()=>{
await connect();
console.log("Listing on");
});


// if already running 
/* In Linux use 
    fuser -k <portno>/tcp
 */


// E11000 duplicate key error collection: web14.tags index: post_id_1 dup key: { post_id: null }