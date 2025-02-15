import { useExpensesContext } from "../hooks/useExpensesContext"

const ExpenseDetails = ({ expense }) => {

    const { dispatch } = useExpensesContext()

    const handleClick = async() => {   
        const response = await fetch('/api/expenses/'+ expense._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_EXPENSE', payload: json})

        }
    }

    return (
        <div className="expense-details">
            <h4>{expense.tittle}</h4>
            <p><strong>Amount : </strong>${expense.amount}</p>
            <p><strong>Month : </strong>{expense.month}</p>
            <p>{expense.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )

}


export default ExpenseDetails