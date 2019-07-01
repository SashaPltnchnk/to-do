import React from 'react'

import classes from './TaskInfo.module.css'

export default function TaskInfo() {
    return (
        <div className={classes.TaskInfo}>
            <div className={classes.TaskTitle}>Title</div>
            <div className={classes.TaskDescription}>Description</div>
        </div>
    )
}
