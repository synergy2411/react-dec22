import CounterButton from "./CounterButton/CounterButton";
import CounterOutput from "./CounterOutput/CounterOutput";
import CounterResult from "./CounterResult/CounterResult";

const Counter = () => {

    return (
        <div className="container">
            <h1>The Counter Component</h1>
            <CounterOutput />
            <CounterButton />
            <hr />
            <CounterResult />
        </div>
    )
}

export default Counter;