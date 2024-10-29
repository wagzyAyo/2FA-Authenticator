const userModel = require("../models/model");


const addApp = async(req, res) =>{
    const user = req.user;
    const {appName} = req.body;
    const date = new Date();
    console.log(date)
    console.log(user)

    if(!appName){
        return res.status(400).json({message: 'App name required'})
    }

    
    try {
        const userData = await userModel.findOne({email: user.email});
        const appList = userData.apps;
        const appExist = appList.some(app => app.name === appName);
        if(appExist){
            return res.status(400).json({message: 'App name already Exist'})
        }

        const newApp = {
            'name': appName,
            'Date': date
        }
        
        user.apps.push(newApp)
        await user.save()
        return res.status(200).json({message: 'App added'})
    } catch (err) {
        console.log('Error adding new app', err)
        return res.status(500).json({message: 'Internal server error'})
    }
}

module.exports = addApp