const userModel = require('../models/model')
const bcrypt = require('bcrypt')
const token = require('../auth/genToken')


const login = async (req, res)=>{
    const {mail, password} = req.body

    const user = userModel.findOne({mail})
    if (!user){
        return res.status(401).json({message: "No user found with this email"})
    }
    try {
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch){
            return res.status(401).json({message: "Email and password did not match"})
        }
        token(res, user._Id)
        res.status(200).json({message: "Authorized login"})
    } catch (error) {
        
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
        await newUser.save();
        token(res, newUser._id)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Error creating account"})
        }
    
}

module.exports = {login, signUp}