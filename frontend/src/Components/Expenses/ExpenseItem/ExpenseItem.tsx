import React from "react";
import IExpense from "../../../model/expense.interface";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

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
                    <ExpenseDate createdAt={props.expense.createdAt} />
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;