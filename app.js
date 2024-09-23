const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
app.use(express.urlencoded({extended: true}));
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.mongoUri;
mongoose.connect(mongoURI)
.then( ()=>{
    console.log("connected to database")
}
    
).catch(
    (err)=>{
        console.log(`Error connecting to database ${err}`)
    }
)


app.get("/", (req, res)=>{
    res.status(200).json({message: "Welcome home!" })
})

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})