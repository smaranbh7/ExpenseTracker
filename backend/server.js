const express = require('express');
require('dotenv').config()
const addExpenseRoutes=require('./routes/addExpense')

//express app
const app = express();

//to attach json to req body
app.use(express.json())

//middleware to console  http's request path and method
app.use((req,res,next)=>{
    console.log(req.path, req.mathod)
})

//routes
app.use('/api/addExpense',addExpenseRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening in port: ${port}!`)
})