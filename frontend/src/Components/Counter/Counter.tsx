import CounterButton from "./CounterButton/CounterButton";
import CounterOutput from "./CounterOutput/CounterOutput";

const Counter = () => {

    return (
        <div className="container">
            <h1>The Counter Component</h1>
            <CounterOutput />
            <CounterButton />
        </div>
    )
}

export default Counter;