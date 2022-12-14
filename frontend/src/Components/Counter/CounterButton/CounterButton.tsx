// import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../store/hooks';
import { increment, decrement, addCounter, subtractCounter } from '../../../store/counter';

const CounterButton = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <button className="btn btn-primary"
                onClick={() => dispatch(increment())}>Increase</button>
            <button className='btn btn-warning'
                onClick={() => dispatch(decrement())}>Decrease</button>
            <button className='btn btn-dark'
                onClick={() => dispatch(addCounter(10))}>Add (10)</button>
            <button className='btn btn-info'
                onClick={() => dispatch(subtractCounter(5))}>Subtract (5)</button>
        </div>
    )

}

export default CounterButton;