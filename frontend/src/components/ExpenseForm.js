import { useState } from "react"
import { useExpensesContext } from "../hooks/useExpensesContext";

const ExpenseForm = () => {
    const { dispatch } = useExpensesContext()
    const [tittle,setTittle]= useState('');
    const [amount,setAmount]= useState('');
    const [month,setMonth]= useState('')
    const [error,setError]= useState(null)
    const [emptyFields, setEmptyFields] = useState([])

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
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setAmount('')
            setMonth('')
            setTittle('')
            setError(null)
            setEmptyFields([])
            console.log("New expense added", json)
            dispatch({type: 'CREATE_EXPENSES', payload: json})
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
                className={emptyFields.includes('title')? 'error' : ''}
            />    

            <label>Amount (in USD)</label>
            <input
                type="number"
                onChange={(e)=>setAmount(e.target.value)}
                value={amount}
                className={emptyFields.includes('amount')? 'error' : ''}
            />    

            <label>For the month</label>
            <input
                type="text"
                onChange={(e)=>setMonth(e.target.value)}
                value={month}
                className={emptyFields.includes('month')? 'error' : ''}
            />    

            <button>Add Expense</button>
            {error && <div className="error">{error}</div>}
        </form>
        
        
    )
}

export default ExpenseForm