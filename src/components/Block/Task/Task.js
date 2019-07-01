import React, { useState, useEffect } from 'react'
import axios from '../../../axios-todos'

import classes from './Task.module.css'

export default function task (props) {
  

    return (
        <div className={classes.Task}>
            <div className={classes.Delete}
                // onClick={() => deleteTask(props.id)}
                >del</div>
            <h3 className={classes.Title}>{props.title}</h3>
            <div>{props.body}</div>
        </div>
    )
};