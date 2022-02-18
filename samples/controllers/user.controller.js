const express = require('express'); 
const router = express.Router(); // have all the crud functionalities
const User = require('../models/user.model');



const crudController = require('./crud.controller');

router.get('',crudController(User).get)

router.patch('/:id',crudController(User).patch)

router.post('',crudController(User).post)

router.delete('/:id',crudController(User).deleteOne)


module.exports =router;