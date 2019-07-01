import React from 'react'
import TaskInfo from '../Task/TaskInfo'

import classes from './Modal.module.css'

export default function Modal() {
    return (
        <div className={classes.Modal}>
            <TaskInfo />
        </div>
    )
}
