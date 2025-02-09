import { useEffect } from "react"
import { useExpensesContext } from "../hooks/useExpensesContext"

//components

import ExpenseDetails from '../components/expenseDetails'
import ExpenseForm from '../components/ExpenseForm'

const Home = () => {
    const {expenses, dispatch} = useExpensesContext()

    useEffect (() => {
        const fetchExpense = async () => {
            const response = await fetch('/api/expenses')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_EXPENSES', payload: json})
            }
        }

        fetchExpense()
    },[])
    return(
        <div className="home">
           <div className="workouts">
            {expenses && expenses.map((expense) =>(
                <ExpenseDetails key={expense._id} expense={expense}/>
            ))}
           </div>
           <ExpenseForm />
        </div>
    )
}

export default Home