import axios from 'axios';
import { useEffect, useState } from "react";
import IExpense from "../../model/expense.interface";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseItem from "./ExpenseItem/ExpenseItem";


const Expenses = () => {

    const [expenses, setExpenses] = useState<Array<IExpense>>([])

    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        fetchExpenses()
    }, [])

    const fetchExpenses = () => {
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
    }

    const showClickHandler = () => {
        setShow(!show)
    }

    const onAddExpense = (exp: IExpense) => {
        axios.post("http://localhost:3030/expenses", exp)
            .then(response => {
                fetchExpenses()
                setExpenses((prevExpenses) => [response.data, ...prevExpenses])
                // console.log(response)
            }).catch(console.error)

        setShow(false)
    }

    const onDeleteExpense = (expId: string) => {
        axios.delete(`http://localhost:3030/expenses/${expId}`)
            .then(response => {
                fetchExpenses()
            })
            .catch(console.error)
    }


    return (
        <div>
            <h1 className="text-center">Expenses App</h1>

            <button className="btn btn-primary" onClick={showClickHandler}>
                {show ? 'Hide' : 'Show'} Form</button>

            {show && <AddExpense addExpense={onAddExpense} />}

            {expenses.length > 0 ?
                <div className="row">
                    {expenses.map(exp => <ExpenseItem expense={exp} key={exp.id} deleteExpense={onDeleteExpense} />)}
                </div> :
                <p>Be the first to add expense</p>}
        </div>
    )
}


export default Expenses;