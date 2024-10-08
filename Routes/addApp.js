const express = require('express');
const route = express.Router();
const authToken = require('../auth/authToken')
const addApp = require('../controllers/addApp')

//Api prefix /api/addapp
route.post('/', authToken, addApp);

module.exports = route