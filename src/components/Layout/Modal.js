import React from 'react'
import TaskInfo from '../Task/TaskInfo'

import classes from './Modal.module.css'

export default function Modal(props) {
    // console.log(props)
    return (
        <div className={classes.Modal}>
            <TaskInfo  _id={props.id} closeTaskInfo={props.closeTaskInfo}/>
        </div>
    )
}
