import './ExpenseDate.css'

function ExpenseDate(props){
    return
            <div className ="expense-date">
                <div className="expense-date__month">{props.date.toLocaleString('en-US', {month: 'Long'})}</div>
                <div className="expense-date__date">{props.date.toLocaleString('en-Us', {day: '2-digit'})}</div>
                <div className="expense-date__year">{props.date.getFullYear()}</div>
            </div>
}

export default ExpenseDate