import React, { useState } from "react";
import IExpense from "../../model/expense.interface";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const INTIAL_EXPENSES: Array<IExpense> = [
    { id: "e001", title: "shopping", amount: 12.9, createdAt: new Date("Dec 9, 2022") },
    { id: "e002", title: "planting", amount: 32.1, createdAt: new Date("Nov 19, 2021") },
    { id: "e003", title: "grocery", amount: 9.9, createdAt: new Date("Jan 12, 2020") }
]

const Expenses = () => {

    const [expenses, setExpenses] = useState<Array<IExpense>>(INTIAL_EXPENSES)

    const [show, setShow] = useState<boolean>(false)

    const showClickHandler = () => {
        setShow(!show)
    }

    const onAddExpense = (exp: IExpense) => {
        setExpenses((prevExpenses) => [exp, ...prevExpenses])
        setShow(false)
    }
    return (
        <div>
            <h1 className="text-center">Expenses App</h1>

            <button className="btn btn-primary" onClick={showClickHandler}>
                {show ? 'Hide' : 'Show'} Form</button>

            {show && <AddExpense addExpense={onAddExpense} />}

            <div className="row">
                {expenses.map(exp => <ExpenseItem expense={exp} key={exp.id} />)}
            </div>
        </div>
    )
}

export default Expenses;