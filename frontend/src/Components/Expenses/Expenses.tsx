import React from "react";

const Expenses = () => {

    let expense = { id: "e001", title: "shopping", amount: 12.9, createdAt: new Date("Dec 9, 2022") }

    return (
        <div>
            <h1 className="text-center">Expenses App</h1>
            <div className="row">
                <div className="col-4">
                    <div className="card p-2">
                        <div className="card-header">
                            <h6 className="text-center">{expense.title.toUpperCase()}</h6>
                        </div>
                        <div className="card-bod">
                            <p>Amount : ${expense.amount}</p>
                            <p>Created At : {expense.createdAt.toString()} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expenses;