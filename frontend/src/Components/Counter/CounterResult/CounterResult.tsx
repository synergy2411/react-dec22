import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { storeResult, deleteResult } from '../../../store/result';
import classes from "./CounterResult.module.css";

const CounterResult = () => {
    const result = useAppSelector(store => store.res.result)
    const counter = useAppSelector(store => store.ctr.value)

    const dispatch = useAppDispatch()
    return (
        <div>
            <button className="btn btn-outline-danger"
                onClick={() => dispatch(storeResult(counter))}>STORE RESULT</button>
            <div className="row">
                <div className="col-4">
                    <ul className="list-group">
                        {result.map((res, ind) => <li onClick={() => dispatch(deleteResult(ind))} className={`list-group-item ${classes['my-list']}`} key={ind}>{res}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default CounterResult;