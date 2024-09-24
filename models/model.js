const mongoose = require('mongoose');


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
})

const userModel = mongoose.model("userAccount", userSchema);
module.exports = userModel