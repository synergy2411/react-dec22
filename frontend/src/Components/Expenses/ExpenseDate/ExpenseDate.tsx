import { useContext } from "react";
import AuthContext from "../../../context/authContext";

const ExpenseDate = (props: { createdAt: Date }) => {

    const context = useContext(AuthContext);

    const year = props.createdAt.toLocaleString("en-US", { year: "2-digit" });
    // const year = props.createdAt.getFullYear();
    // const day = props.createdAt.toLocaleString("en-US", { day: "numeric" });
    // const month = props.createdAt.toLocaleString("en-US", { month: 'long' });

    return (<>{context.isLoggedIn ? <p>Created At : {year}</p> : <p>Need to login</p>}</>)

}

export default ExpenseDate;