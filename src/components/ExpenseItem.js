import './ExpenseItem.css'
import React from "react";

function ExpenseItem() {
    const date = new Date();
    const title = "Car Insurance";
    const amount = "12345";

    return <div className="expense-item">
        <div>{date.toISOString()}</div>
        <div className="expense-item__description"><h2>{title}</h2></div>
        <div className="expense-item__price">${amount}</div>
    </div>
}

export default ExpenseItem;