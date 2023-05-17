import React from 'react';
import classes from './CoreSelect.module.css'

const CoreSelect = ({options, defaultOption, value, onChange}) => {
    return (
        <select
            value={value}
            className={classes['core-select']}
            name="sort-posts"
            id="sort-posts"
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value="byName">{defaultOption}</option>
            { options.map((option) =>
                <option value={option.value} key={option.value}>{option.title}</option>
            ) }
        </select>
    );
};

export default CoreSelect;