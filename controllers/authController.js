const userModel = require('../models/model')
const bcrypt = require('bcrypt')


const login = async (req, res)=>{
    const {mail, password} = req.body

    const user = userModel.findOne({mail})
    if (!user){
        return res.status(401).json({message: "Email and password did not match"})
    }

}

const signUp = async (req, res) =>{
    const {mail, password} = req.body

    if (!mail || !password){
       return res.status(401).json({message: "Please provide email and password"})
    }
    try {
        const SALT = parseInt(process.env.SALT) || 7
       const hashedPassword = await bcrypt.hash(password, SALT)
        const newUser = userModel({
            email: mail,
            password: hashedPassword
        })
        await newUser.save()
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Error creating account"})
        }
    
}

module.exports = {login, signUp}