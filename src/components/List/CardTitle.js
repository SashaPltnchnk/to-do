import React, { Component } from 'react';
// import Task from './Task/Task'
import { connect } from 'react-redux'
import { fetchTasks, deleteTask } from '../../store/actions/task'
import Modal from '../Layout/Modal'

import classes from './List.module.css'
import TaskInfo from '../Task/TaskInfo';



class CardTitle extends Component {
  state = {
    isTaskInfoShown: false,
    currentId: null
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  openTaskInfo = id => {
    this.setState({isTaskInfoShown: true, currentId: id})
  }

  closeTaskInfo = () => {
    this.setState({isTaskInfoShown: false, currentId: null})
  }

  handleDeleting = id => {
    this.props.deleteTask(id)
      .then(() => {
        this.props.fetchTasks()
    })
  }

  render() {
    let newTaskData = this.props.tasks.map(todo => {
      return (
        <div 
            {...todo} 
            className={classes.CardTitle}
            key={todo.id}
            id={todo.id}
            onClick={() => this.openTaskInfo(todo.id)}>
                {todo.title} 
                {this.state.isTaskInfoShown ? 
                  <Modal 
                    closeTaskInfo={this.closeTaskInfo}
                    > 
                    <TaskInfo  _id={this.state.currentId} closeTaskInfo={this.closeTaskInfo}/>
                  </Modal> 
                  : null
                }
              {/* <i className="fas fa-pencil-alt"></i> */}
              {/* <i className="far fa-trash-alt" onClick={() => this.handleDeleting(todo.id)} /> */}
        </div>)
    })

    return (
      <div>
        {newTaskData}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  }
}

const mapDispatchToProps = { fetchTasks, deleteTask };

export default connect(mapStateToProps, mapDispatchToProps)(CardTitle);