// import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useAppSelector } from '../../../store/hooks';

const CounterOutput = () => {
    // const counter = useSelector((state: RootState) => state.ctr.value)
    const counter = useAppSelector(state => state.ctr.value)
    return (
        <p className="display-4">Counter : {counter} </p>
    )
}

export default CounterOutput;