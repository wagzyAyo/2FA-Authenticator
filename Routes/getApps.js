const express = require('express');
const route = express.Router();
const authToken = require('../auth/authToken');
const getApps = require('../controllers/getAppsController');


//Api prefix api/getapps
route.get('/', authToken, getApps)

module.exports = route