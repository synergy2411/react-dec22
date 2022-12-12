import React, { useState } from "react";
import IExpense from "../../model/expense.interface";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const Expenses = () => {

    let expenses: Array<IExpense> = [
        { id: "e001", title: "shopping", amount: 12.9, createdAt: new Date("Dec 9, 2022") },
        { id: "e002", title: "planting", amount: 32.1, createdAt: new Date("Nov 19, 2021") },
        { id: "e003", title: "grocery", amount: 9.9, createdAt: new Date("Jan 12, 2020") }
    ]


    const [show, setShow] = useState<boolean>(true)

    const showClickHandler = () => {
        setShow(!show)
    }
    return (
        <div>
            <h1 className="text-center">Expenses App</h1>

            <button className="btn btn-primary" onClick={showClickHandler}>
                {show ? 'Hide' : 'Show'} Content</button>

            {show && <p>Showing the content</p>}

            <div className="row">
                <ExpenseItem expense={expenses[0]} />
                <ExpenseItem expense={expenses[1]} />
                <ExpenseItem expense={expenses[2]} />
            </div>
        </div>
    )
}

export default Expenses;