import React from "react";
import IExpense from "../../../model/expense.interface";

// const ExpenseItem: React.FC<{ expense: IExpense }> = (props) => {
const ExpenseItem = (props: { expense: IExpense }) => {

    return (
        <div className="col-4">
            <div className="card p-2">
                <div className="card-header">
                    <h6 className="text-center">{props.expense.title.toUpperCase()}</h6>
                </div>
                <div className="card-body">
                    <p>Amount : ${props.expense.amount}</p>
                    <p>Created At : {props.expense.createdAt.toString()} </p>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;