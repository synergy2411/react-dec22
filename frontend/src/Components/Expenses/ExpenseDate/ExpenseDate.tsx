const ExpenseDate = (props: { createdAt: Date }) => {

    const year = props.createdAt.toLocaleString("en-US", { year: "2-digit" });
    // const year = props.createdAt.getFullYear();
    // const day = props.createdAt.toLocaleString("en-US", { day: "numeric" });
    // const month = props.createdAt.toLocaleString("en-US", { month: 'long' });

    return <p>Created At : {year}</p>

}

export default ExpenseDate;