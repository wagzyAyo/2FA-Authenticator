const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    'email' : {
        required: true,
        type: String
    },
    "password": {
        required: true,
        type: String
    },
    "code": {
        type: Number
    }
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel