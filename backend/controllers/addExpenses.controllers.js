const Expense= require('../models/expenseModel')

const mongoose= require('mongoose')

//get all expenses
const getExpenses = async(req,res)=>{
    const expenses= await Expense.find({}).sort({createdAt: -1})

    res.status(200).json(expenses)
}

//get single expenses
const getExpense= async(req, res)=>{
    const { id }= req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Expense'})
    }

    const expense= await Expense.findById(id)

    if(!expense){
        return res.status(404).json({error: 'No Such Expense'})
    }

    res.status(200).json(expense)
}

//post or create a expense
const createExpense= async(req, res) =>{
    const {tittle, amount, month} = req.body

    try{
        const expense= await Expense.create({ tittle, amount, month})
        res.status(200).json(expense)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a expense

const deleteExpense= async (req, res)=>{
    const { id }= req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Expense'})
    }

    const expense= await Expense.findOneAndDelete({_id: id})

    if(!expense){
        return res.status(404).json({error: 'No Such Expense'})
    }

    res.status(200).json(expense)
}

//update a exopense
const updateExpense= async(req, res)=>{
    const { id }= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Expense'})
    }

    const expense= await Expense.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!expense){
        return res.status(404).json({error: 'No Such Expense'})
    }

    res.status(200).json(expense)
}


//module exports
module.exports= {
    createExpense,
    getExpenses,
    getExpense,
    deleteExpense,
    updateExpense
}