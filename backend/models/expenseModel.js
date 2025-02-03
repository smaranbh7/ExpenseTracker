const mongoose= require('mongoose')

const Schema = mongoose.Schema


//Database Schema
const expenseSchema= new Schema({
    tittle:{
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true
    }
}, {timestamps:true})


//exporting the schema and model 
module.exports= mongoose.model('Expense', expenseSchema)