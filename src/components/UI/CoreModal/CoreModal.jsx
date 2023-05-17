import React from 'react';
import classes from './CoreModal.module.css'

const CoreModal = ({children, visible, setVisible}) => {
    const modalClasses = [classes['core-modal']]

    if (visible) {
        modalClasses.push(classes.active)
    }

    return (
        <div className={modalClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes['core-modal-container']} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CoreModal;