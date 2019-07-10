import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask, fetchTasks } from '../../store/actions/task'
import AddTaskDescription from './AddTaskDescription'

import classes from './TaskInfo.module.css'


class TaskInfo extends Component {
    state = {
        todo: {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        this.setState(state => ({
            ...state,
            todo: this.props.tasks.find(task => task.id === this.props._id)}))
    }
   

    handleDeletingTasks = id => {
        this.props.deleteTask(id)
            .then(() => {
                this.props.fetchTasks()
                this.props.closeTaskInfo()
            })
    }
    
    render () {
        // console.warn(this.state.todo)
        // console.log(this.props._id)
        const description = this.state.todo.body 
            ? <div className={classes.TaskDescription}>{this.state.todo.body}</div>
            :   <AddTaskDescription {...this.state.todo} id={this.props._id} />
    
        return (
            <div className={classes.TaskInfo}>
                <div className={classes.TaskTitle}>{this.state.todo.title}</div>
                <div className={classes.Description}>Description</div>
                {description}

                <div 
                    className={classes.TaskDelete} 
                    onClick={() => this.handleDeletingTasks(this.props._id)}
                    >DELETE task</div>
            </div>
        )
    }
    }
  

const mapStateToProps = state => {
    return {
      tasks: state.tasks,
    }
  }

const mapDispatchToProps = { deleteTask, fetchTasks };

export default connect(mapStateToProps, mapDispatchToProps)(TaskInfo)