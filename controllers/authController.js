const userModel = require('../models/model')
const bcrypt = require('bcrypt')
const token = require('../auth/genToken')


const login = async (req, res)=>{
    const {email, password} = req.body

    const user = await userModel.findOne({email});
    //console.log(user._id)
    if (!user){

        return res.status(401).json({message: "No user found with this email"})
    }
    try {
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch){
            return res.status(401).json({message: "Email and password did not match"})
        }
        token(res, user._id)
        return res.status(200).json({message: "Authorized login"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"})
    }

}

const signUp = async (req, res) =>{
    const {email, password} = req.body

    if (!email || !password){
       return res.status(401).json({message: "Please provide email and password"})
    }

    //Check if user exist
    const userExist = await userModel.findOne({email})
    if(userExist){
        return res.status(409).json({message: "Email already exist"})
    }

    try {
        
        const SALT = parseInt(process.env.SALT) || 10
       const hashedPassword = await bcrypt.hash(password, SALT)
        const newUser = userModel({
            email: email,
            password: hashedPassword
        })
        await newUser.save();
        token(res, newUser._id);
        return res.status(200).json({message: "Account created"})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Error creating account"})
        }
    
}

module.exports = {login, signUp}