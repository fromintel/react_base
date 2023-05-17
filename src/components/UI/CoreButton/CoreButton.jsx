import React from 'react';
import classes from './CoreButton.module.css';

const CoreButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes['core-btn']}>{children}</button>
    );
};

export default CoreButton;