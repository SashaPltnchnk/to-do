import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask, fetchTasks } from '../../store/actions/task'

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

    // handleDeletingTasks = () => {
    //     this.props.deleteTask(this.props.id)
    //         .then(() => {this.props.fetchTasks()})
    // }
    
    render () {
        // console.warn(this.state.todo)
        // console.log(this.props._id)
        
    
        return (
            <div className={classes.TaskInfo}>
                <div className={classes.TaskTitle}>{this.state.todo.title}</div>
                <div className={classes.TaskDescription}>Description</div>
                <div className={classes.TaskDescription}>{this.state.todo.body}</div>
                <div 
                    className={classes.TaskDelete} 
                    // onClick={this.handleDeletingTasks}
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