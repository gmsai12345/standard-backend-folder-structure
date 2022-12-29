const userRoutes = require('../server/routes/users.js')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// import dotenv from "dotenv"
// import userRoutes from "./routes/users.js"
// // what is cors bascically is if 2 server talk to each other it will basically throw 
// // error to remove the error cors is used
// // in node we have to use .js
// const app = express();//create server
// app.use(express.json({limit:"30mb",extended:true}))
// app.use(express.urlencoded({limit:"30mb",extended:true}))
// app.use(cors());
// app.get('/',(req,res) =>{
//     res.send("This is a stackoverflow clone api")
// })
// app.use('/user',userRoutes)
// const PORT = process.env.PORT || 5000
// const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone.cg7wmh0.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology: true})
//     .then(() => app.listen(PORT,() => console.log(`RUN ON ${PORT}`)))
//     .catch((err) => console.log(err.message) )
// import express from 'express'
// import mongoose from 'mongoose'
// import cors from 'cors'
// import dotenv from 'dotenv'




const app = express();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes)

const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone.cg7wmh0.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))