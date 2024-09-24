const userModel = require('../models/model')


const login = async (req, res)=>{
    const {mail, password} = req.body
}

const signUp = async (req, res) =>{
    const {mail, password} = req.body

    if (!mail || !password){
       return res.status(401).json({message: "Please provide email and password"})
    }

    const newUser = userModel({
        email: mail,
        password: password
    })
    await newUser.save()

}

module.exports = {login, signUp}