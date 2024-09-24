const express = require('express');
const route = express.Router();
const {login, signUp} = require('../controllers/authController')

//Api prefix /api/auth
route.post('/login', login);
route.post('/signup', signUp);


module.exports = route