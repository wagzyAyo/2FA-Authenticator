

const addApp = async(req, res) =>{
    const user = req.user;
    const {appName} = req.body;
    const date = new Date.now('YYYY-MM-DD');

    if(!appName){
        return res.status(400).json({message: 'App name required'})
    }
    try {
        return res.status(200).json({message: 'App added'})
    } catch (err) {
        console.log('Error adding new app', err)
        return res.status(500).json({message: 'Internal server error'})
    }
}

module.exports = addApp