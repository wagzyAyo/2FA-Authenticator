const express = require('express');
const route = express.Router();
const authToken = require('../auth/authToken');
const getApps = require('../controllers/getApps');


//Api prefix api/getapps
route.post('/', authToken, getApps)