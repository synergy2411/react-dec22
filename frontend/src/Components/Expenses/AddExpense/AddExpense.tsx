import { ChangeEvent, FormEvent, useState } from 'react';

const AddExpense = () => {

    const [enteredTitle, setEnteredTitle] = useState<string>('');
    const [enteredAmount, setEnteredAmount] = useState<string>('')
    const [enteredCreatedAt, setEnteredCreatedAt] = useState<string>('')

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setEnteredTitle(event.target.value)
    const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setEnteredAmount(event.target.value)
    const createdAtChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setEnteredCreatedAt(event.target.value)

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        console.log(enteredTitle, enteredAmount, enteredCreatedAt)
    }
    return (
        <div>
            <h2>Add Expense Form</h2>
            <form onSubmit={submitHandler}>
                {/* title */}
                <label htmlFor='title'>Title :</label>
                <input type="text" name='title' onChange={titleChangeHandler} />
                <p>Entered Title : {enteredTitle} </p>
                <br />
                {/* amount */}
                <label htmlFor='amount'>Amount :</label>
                <input type="number" name='amount' onChange={amountChangeHandler} />
                <br />
                {/* createdAt */}
                <label htmlFor='created-at'>Created At:</label>
                <input type="date" name='created-at' onChange={createdAtChangeHandler} />
                <br />
                {/* button */}
                <button className='btn btn-primary' type='submit'>Add Expense</button>
            </form>
        </div>
    );
}

export default AddExpense;
