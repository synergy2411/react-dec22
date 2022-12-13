import { useReducer } from "react";

interface StateType {
    counter: number;
    result: Array<number>;
}

interface ActionType {
    type: string;
    payload: number;
}


const reducer = (state: StateType, action: ActionType) => {
    if (action.type === "INCREASE") {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }
    if (action.type === "DECREASE") {
        return {
            ...state,
            counter: state.counter - action.payload
        }
    }
    if (action.type === "STORE_RESULT") {
        return {
            ...state,
            result: [state.counter, ...state.result]
        }
    }
    return state;
}

const UseReducerDemo = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0, result: [] })

    const addClickHandler = () => dispatch({ type: "INCREASE", payload: 10 })
    const subtractClickHandler = () => dispatch({ type: "DECREASE", payload: 5 })

    const storeResultClickHandler = () => dispatch({ type: "STORE_RESULT", payload: 0 })

    return (
        <div className="text-center">
            <p className="display-4">Counter : {state.counter}</p>
            <button className="btn btn-primary" onClick={addClickHandler}>Add</button>
            <button className="btn btn-info" onClick={subtractClickHandler}>SUBTRACT</button>
            <hr />
            <button className="btn btn-dark" onClick={storeResultClickHandler}>STORE RESULT</button>

            <ul>
                {state.result.map((r, idx) => <li key={idx} >{r}</li>)}
            </ul>
        </div>
    )

}

export default UseReducerDemo;