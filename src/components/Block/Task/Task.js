import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteTask, fetchTasks } from '../../../store/actions/task'
 
import classes from './Task.module.css'


function task (props) {

    // const handleDeletingTask = (id) => {
    //     props.deleteTask(id)
    //     props.fetchTasks()
    // }

    return (
        <div className={classes.Task}>
            <div className={classes.Delete}
                onClick={() => {
                    props.deleteTask(props.id);
                    props.fetchTasks()
                }}
                >del</div>
            <h3 className={classes.Title}>{props.title}</h3>
            <div>{props.body}</div>
        </div>
    )
};

const mapDispatchToProps = { deleteTask, fetchTasks };

export default connect(null, mapDispatchToProps)(task);