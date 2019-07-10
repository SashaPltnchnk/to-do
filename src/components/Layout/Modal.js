import React from 'react'

import classes from './Modal.module.css'

export default function Modal(props) {
    function closeModal(e) {
        e.stopPropagation()
        props.closeTaskInfo()
    }
    return (
        <div className={classes.Modal}>
            <button 
                className={classes.CloseIcon}
                onClick={closeModal}
            >
                x
            </button>
            {props.children}
        </div>
    )
}
