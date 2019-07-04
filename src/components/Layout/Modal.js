import React from 'react'
// import TaskInfo from '../Task/TaskInfo'

import classes from './Modal.module.css'

export default function Modal(props) {
    // debugger
    // console.log(props)
    return (
        <div className={classes.Modal}>
            <button 
                className={classes.CloseIcon}
                onClick={props.closeTaskInfo}
            >
                x
            </button>
            {props.children}
            {/* <TaskInfo  _id={props.id} closeTaskInfo={props.closeTaskInfo}/> */}
        </div>
    )
}
