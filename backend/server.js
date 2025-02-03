const express = require('express');
require('dotenv').config()
const addExpenseRoutes=require('./routes/addExpense')
const mongoose = require('mongoose')

//express app
const app = express();

//to attach json to req body
app.use(express.json())

//middleware to console  http's request path and method
app.use((req,res,next)=>{
    console.log(req.path, req.method)
})

//routes
app.use('/api/addExpense',addExpenseRoutes)

//connect to db and listen to requuest
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Server is connected to DB and Listening in port: ${process.env.PORT}!`)
        })
    })
    //else throw error
    .catch((error)=>{
        console.log(error)
    })
