import { useState, useEffect } from "react";
import axios from 'axios';
import IExpense from "../../model/expense.interface";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

// const INTIAL_EXPENSES: Array<IExpense> = 

const Expenses = () => {

    const [expenses, setExpenses] = useState<Array<IExpense>>([])

    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        axios.get("http://localhost:3030/expenses")
            .then(response => {
                const expArray = response.data.map((exp: any) => {
                    return {
                        amount: Number(exp.amount),
                        createdAt: new Date(exp.createdAt),
                        ...exp
                    }
                })
                setExpenses(expArray)
            }).catch(err => console.error(err))
    }, [])

    const showClickHandler = () => {
        setShow(!show)
    }

    const onAddExpense = (exp: IExpense) => {
        axios.post("http://localhost:3030/expenses", exp)
            .then(response => {
                setExpenses((prevExpenses) => [response.data, ...prevExpenses])
                // console.log(response)
            }).catch(console.error)

        setShow(false)
    }
    if (expenses.length > 0) {

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
    return <p>Loading...</p>
}

export default Expenses;