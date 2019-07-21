import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask, fetchTasks } from '../../store/actions/task'
import AddTaskDescription from './AddTaskDescription'

import classes from './TaskInfo.module.css'


class TaskInfo extends Component {
    state = {
        task: {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        this.setState(state => {
            const targetTask = this.props.task
            const task = { title: targetTask.title, body: targetTask.body }
            return {
                ...state,
                task
            }
            })
    }
   

    handleDeletingTasks = id => {
        this.props.deleteTask(id)
            .then(() => {
                this.props.fetchTasks()
                this.props.closeTaskInfo()
            })
    }
    
    render () {
        // console.warn(this.props)
        console.warn(this.state)
        // console.log(this.props._id)

        const description = this.state.task.body 
            ? <div className={classes.TaskDescription}>{this.state.task.body}</div>
            :   <AddTaskDescription {...this.state.task} id={this.props._id} />
    
        return (
            <div className={classes.TaskInfo}>
                <div className={classes.TaskTitle}>{this.state.task.title}</div>
                <div className={classes.Description}>Description</div>
                {/* {description} */}

                <div 
                    className={classes.TaskDelete} 
                    onClick={() => this.handleDeletingTasks(this.props._id)}
                    >DELETE task</div>
            </div>
        )
    }
    }
  

const mapDispatchToProps = { deleteTask, fetchTasks };

export default connect(null, mapDispatchToProps)(TaskInfo)