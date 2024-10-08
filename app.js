const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoute = require('./Routes/authRoutes');
const cors = require('cors')
const addApp = require('./Routes/addApp')
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser)
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
);
app.use('/api/auth', authRoute);
app.use('/api/addapp', addApp);


app.get("/", (req, res)=>{
    res.status(200).json({message: "Welcome home!" })
})

app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})