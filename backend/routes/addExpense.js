//imports
const express = require('express')

const {
    createExpense,
    getExpenses,
    getExpense,
    deleteExpense,
    updateExpense
} = require('../controllers/addExpenses.controllers')

//router import
const router= express.Router()

//get all expenses
router.get('/',getExpenses)

//post a expense
router.post('/', createExpense)

//delete a expense
router.delete('/:id', deleteExpense)

// update a expense
router.patch('/:id', updateExpense)

module.exports=router