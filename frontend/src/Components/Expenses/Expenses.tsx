import React from "react";
import IExpense from "../../model/expense.interface";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const Expenses = () => {

    let expenses: Array<IExpense> = [
        { id: "e001", title: "shopping", amount: 12.9, createdAt: new Date("Dec 9, 2022") },
        { id: "e002", title: "planting", amount: 32.1, createdAt: new Date("Nov 19, 2021") },
        { id: "e003", title: "grocery", amount: 9.9, createdAt: new Date("Jan 12, 2020") }
    ]

    return (
        <div>
            <h1 className="text-center">Expenses App</h1>

            <div className="row">
                <ExpenseItem expense={expenses[0]} />
                <ExpenseItem expense={expenses[1]} />
                <ExpenseItem expense={expenses[2]} />
            </div>
        </div>
    )
}

export default Expenses;