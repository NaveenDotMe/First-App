import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {

    const expenses = [
        {title: 'Car Insurance', date: new Date(2022, 8, 14), amount: '12345'},
        {title: 'Tyre', date: new Date(2022, 9, 19), amount: '1234'},
        {title: 'Vehicle', date: new Date(2022, 10, 30), amount: '123456'},
    ]

    return (
        <div>
            <h2>Let's Get Started</h2>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
