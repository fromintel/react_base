import React, {useState} from 'react';
import CoreButton from './UI/CoreButton/CoreButton';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <CoreButton onClick={increment}>increment</CoreButton>
            <CoreButton onClick={decrement}>decrement</CoreButton>
        </div>
    )
}

export default Counter;