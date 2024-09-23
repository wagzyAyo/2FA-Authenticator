const express = require('express');
const route = express.Router();
const {login, signUp} = require('../controllers/authController')

//Api prefix /api/auth
route.post('/login', login(req, res));
route.post('/signup', signUp(req, res));


module.exports = route