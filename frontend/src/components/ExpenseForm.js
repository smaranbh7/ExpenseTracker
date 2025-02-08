import { useState } from "react"

const ExpenseForm = () => {
    const [tittle,setTittle]= useState('');
    const [amount,setAmount]= useState('');
    const [month,setMonth]= useState('')
    const [error,setError]= useState(null)

    const handleSubmit = async (e) =>{
        //prevents the page
        e.preventDefault()

        const expense = {tittle, amount, month}

        const response = await fetch('/api/expenses', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setAmount('')
            setMonth('')
            setTittle('')
            setError(null)
            console.log("New expense added", json)
        }
    }

    return(
        <form  className="create" onSubmit={handleSubmit}>
            <h3>Add a New Expense</h3>

            <label>Enter a new expense</label>
            <input
                type="text"
                onChange={(e)=>setTittle(e.target.value)}
                value={tittle}
            />    

            <label>Amount (in USD)</label>
            <input
                type="number"
                onChange={(e)=>setAmount(e.target.value)}
                value={amount}
            />    

            <label>For the month</label>
            <input
                type="text"
                onChange={(e)=>setMonth(e.target.value)}
                value={month}
            />    

            <button>Add Expense</button>
            {error && <div className="error">{error}</div>}
        </form>
        
        
    )
}

export default ExpenseForm