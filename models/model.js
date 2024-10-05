const mongoose = require('mongoose');

const apps = new mongoose.Schema({
    'name': {
        type: String,
        required: true,
    },
    'Date': {
        type: String,
    }
})

const userSchema = new mongoose.Schema( {
    'email' : {
        required: true,
        type: String,
        unique: true,
    },
    "password": {
        required: true,
        type: String
    },
    'apps': [
        apps
    ]
})

const userModel = mongoose.model("userAccount", userSchema);
module.exports = userModel