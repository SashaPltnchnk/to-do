import React from 'react'
import { connect } from 'react-redux'
import { deleteTask, fetchTasks } from '../../../store/actions/task'
 
import classes from './Task.module.css'


const task = (props) => {

    const handleDeletingTasks = () => {
        props.deleteTask(props.id)
            .then(() => {props.fetchTasks()})
    }

    return (
        <div className={classes.Task}>
            <button 
                className={classes.Delete}
                onClick={handleDeletingTasks}
                >x</button>
            <h3 className={classes.Title}>{props.title}</h3>
            
            <div>{props.body}</div>
        </div>
    )
};

const mapDispatchToProps = { deleteTask, fetchTasks };

export default connect(null, mapDispatchToProps)(task);