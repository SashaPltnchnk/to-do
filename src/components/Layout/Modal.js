import React from 'react'

import classes from './Modal.module.css'

export default function Modal(props) {
    function da(e) {
        // debugger
        e.stopPropagation()
        props.closeTaskInfo()
    }
    return (
        <div className={classes.Modal}>
            <button 
                className={classes.CloseIcon}
                onClick={da}
            >
                x
            </button>
            {props.children}
        </div>
    )
}
