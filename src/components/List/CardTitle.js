import React, { Component } from 'react';

import Modal from '../Layout/Modal'
import classes from './List.module.css'
import TaskInfo from '../Task/TaskInfo';



class CardTitle extends Component {
  state = {
    isTaskInfoShown: false,
    currentId: null
  }


  openTaskInfo = id => {
    this.setState({isTaskInfoShown: true, currentId: id})
  }

  closeTaskInfo = () => {
    this.setState({isTaskInfoShown: false, currentId: null})
  }

  // handleDeleting = id => {
  //   this.props.deleteTask(id)
  //     .then(() => {
  //       this.props.fetchTasks()
  //   })
  // }

  render() {

    const tasks = this.props.tasks.map(task => (
      <div 
        className={classes.CardTitle}
        key={task.id}
        onClick={() => this.openTaskInfo(task.id)}
        
        >
          {task.title}
          {/* <i className="fas fa-pencil-alt"></i> */}
          {/* <i className="far fa-trash-alt" onClick={() => this.handleDeleting(todo.id)} /> */}
        </div>
    ))

    const taskInfo = this.state.isTaskInfoShown
      ? <Modal closeTaskInfo={this.closeTaskInfo}>
        <TaskInfo 
          task={this.props.tasks.find(task => task.id === this.state.currentId)}
          _id={this.state.currentId} 
          closeTaskInfo={this.closeTaskInfo} />
      </Modal>
      : null

    return (
      <div>
        {tasks}
        {taskInfo}
      </div>
    )
  }
}



export default CardTitle;