import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {

    const expenses = [
        {title:'Car Insurance', date: new Date(2022,8,14), amount:'12345' },
        {title:'Tyre', date: new Date(2022,9,19), amount:'1234' },
        {title:'Vehicle', date: new Date(2022,10,30), amount:'123456' },
    ]

    return (
        <div>
            <h2>Let's Get Started</h2>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        </div>
    );
}

export default App;
