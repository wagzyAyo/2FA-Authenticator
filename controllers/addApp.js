

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