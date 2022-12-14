import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../../store/counter';

const CounterButton = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button className="btn btn-primary"
                onClick={() => dispatch(increment())}>Increase</button>
        </div>
    )

}

export default CounterButton;