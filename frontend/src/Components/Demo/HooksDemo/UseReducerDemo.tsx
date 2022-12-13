import { useReducer } from "react";
import { idText } from "typescript";

interface StateType {
    counter: number;
}

interface ActionType {
    type: string;
    payload: number;
}

const reducer = (state: StateType, action: ActionType) => {
    if (action.type === "INCREASE") {
        return {
            counter: state.counter + action.payload
        }
    }
    if (action.type === "DECREASE") {
        return {
            counter: state.counter - action.payload
        }
    }
    return state;
}

const UseReducerDemo = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 })

    const addClickHandler = () => dispatch({ type: "INCREASE", payload: 10 })
    const subtractClickHandler = () => dispatch({ type: "DECREASE", payload: 5 })

    return (
        <div className="text-center">
            <p className="display-4">Counter : {state.counter}</p>
            <button className="btn btn-primary" onClick={addClickHandler}>Add</button>
            <button className="btn btn-info" onClick={subtractClickHandler}>SUBTRACT</button>
        </div>
    )

}

export default UseReducerDemo;