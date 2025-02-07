import { useEffect, useState } from "react"

//components

import ExpenseDetails from '../components/expenseDetails'

const Home = () => {
    const [expenses, setExpenses]= useState(null)

    useEffect (() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/expenses')
            const json = await response.json()

            if(response.ok){
                setExpenses(json)
            }
        }

        fetchWorkout()
    },[])
    return(
        <div className="home">
           <div className="workouts">
            {expenses && expenses.map((expense) =>(
                <ExpenseDetails key={expense._id} expense={expense}/>
            ))}
           </div>
        </div>
    )
}

export default Home