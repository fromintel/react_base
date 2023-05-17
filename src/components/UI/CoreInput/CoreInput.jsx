import React from 'react';
import classes from './CoreInput.module.css'

const CoreInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref} {...props} className={classes['core-input']}/>
        </div>
    );
});

export default CoreInput;