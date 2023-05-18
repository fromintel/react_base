import React from 'react';
import Counter from '../components/Counter';
import ClassCounter from '../components/ClassCounter';

const Counters = () => {
    return (
        <div className='counters'>
            <Counter/>
            <ClassCounter/>
        </div>
    );
};

export default Counters;