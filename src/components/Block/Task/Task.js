import React from 'react';

import classes from './Task.module.css';

const task = (props) => {
    console.log(props.delete)
    return (
        <div className={classes.Task}>
            <div className={classes.Delete}
                onClick={props.delete}
                >del</div>
            <h3 className={classes.Title}>Buy</h3>
            <div>milk, meat, butter</div>
        </div>
    )
};

export default task;