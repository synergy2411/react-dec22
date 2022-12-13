import React, { ChangeEvent, FormEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import { v4 } from 'uuid';
import IExpense from '../../../model/expense.interface';
import classes from './AddExpense.module.css';

const AddExpense: React.FC<{ addExpense: (exp: IExpense) => void }> = (props) => {

    // const [user, setUser] = useState<{name : string, age:  number}>({ name : '', age: 0})

    const [enteredTitle, setEnteredTitle] = useState<string>('');
    const [enteredAmount, setEnteredAmount] = useState<string>('')
    const [enteredCreatedAt, setEnteredCreatedAt] = useState<string>('')

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setEnteredTitle(event.target.value)
    const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setEnteredAmount(event.target.value)
    const createdAtChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setEnteredCreatedAt(event.target.value)

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        console.log(enteredTitle, enteredAmount, enteredCreatedAt);
        let newExpense: IExpense = {
            id: v4(),
            title: enteredTitle,
            amount: Number(enteredAmount),
            createdAt: new Date(enteredCreatedAt)
        }
        // console.log(newExpense)
        props.addExpense(newExpense)                // Lifting-up the state
    }
    return createPortal(
        <div className={`row ${classes['backdrop']}`}>
            <div className="col-8 offset-2">
                <div className={`card ${classes['the-form']}`}>
                    <div className="card-body">
                        <h2 className='text-center'>Add Expense Form</h2>
                        <form onSubmit={submitHandler}>
                            {/* title */}
                            <label htmlFor='title'>Title :</label>
                            <input type="text" name='title' className='form-control' onChange={titleChangeHandler} />

                            {/* amount */}
                            <label htmlFor='amount'>Amount :</label>
                            <input type="number" name='amount' className='form-control' onChange={amountChangeHandler} />

                            {/* createdAt */}
                            <label htmlFor='created-at'>Created At:</label>
                            <input type="date" name='created-at' className='form-control' onChange={createdAtChangeHandler} />

                            {/* button */}
                            <div className="d-grid">
                                <button className='btn btn-primary my-2' type='submit'>Add Expense</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>, document.getElementById("modal") as HTMLElement
    );
}

export default AddExpense;
