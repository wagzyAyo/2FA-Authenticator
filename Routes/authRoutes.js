const express = require('express');
const route = express.Router();
const {login, signUp, BioAuth} = require('../controllers/authController')
const authToken = require('../auth/authToken')

//Api prefix /api/auth
route.post('/login', login);
route.post('/signup', signUp);
route.post('/bioauth',authToken, BioAuth )


module.exports = route