const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.status(200).json({message: "Welcome home!" })
})

app.listen(3000, ()=>{
    console.log("App listening on port 3000")
})