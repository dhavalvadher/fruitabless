import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../component/redux/action/counter.action';

function Conter(props) {

    const incdec = useSelector(state => state.counter)
    console.log(incdec);

    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch(increment())
    }
    const handleDec = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <button onClick={handleInc}>+</button>
            {incdec.count}
            <button onClick={handleDec}>-</button>
        </div>
    );
}

export default Conter;