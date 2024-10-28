const userModel = require("../models/model");

const getApps = async (req, res)=>{
    const user = req.user;
   

    try {
        const userEmail = user.email
        const userData = await userModel.findOne({userEmail});
        if (!userData){
            return res.status(404).json({message: "User not found"})
        }else {
            return res.status(200).json(userData.apps)
        }
    } catch (err) {
        console.log('Error getting user data')
        return res.status(500).json({message: 'Internal server error', err})
    }
}

module.exports =  getApps