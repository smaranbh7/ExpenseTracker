const expenseDetails = ({ expense }) => {
    return (
        <div className="expense-details">
            <h4>{expense.tittle}</h4>
            <p><strong>Amount : </strong>${expense.amount}</p>
            <p><strong>Month : </strong>{expense.month}</p>
            <p>{expense.createdAt}</p>
        </div>
    )

}


export default expenseDetails