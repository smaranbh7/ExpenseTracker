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
        required: true,
        min: 0
    },
    month: {
        type: String,
        required: true,
        enum: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
    
    }
}, {timestamps:true})


//exporting the schema and model 
module.exports= mongoose.model('Expense', expenseSchema)