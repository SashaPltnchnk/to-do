import React from 'react';

import classes from './Task.module.css';

const task = (props) => {
    return (
        <div className={classes.Task}>
            <h3 className={classes.Title}>Buy</h3>
            <div>milk, meat, butter</div>
        </div>
    )
};

export default task;