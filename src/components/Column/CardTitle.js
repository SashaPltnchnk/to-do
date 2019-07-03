import React, { Component } from 'react';
// import Task from './Task/Task'
import { connect } from 'react-redux'
import { fetchTasks } from '../../store/actions/task'
import Modal from '../Layout/Modal'

import classes from './Column.module.css'



class CardTitle extends Component {
  state = {
    isTaskInfoShown: false,
    currentId: null
  }

  componentDidMount() {
    this.props.fetchTasks()
  }

  openTaskInfo = id => {
    this.setState({isTaskInfoShown: true})
    this.setState({currentId: id})
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
                {this.state.isTaskInfoShown ? <Modal id={this.state.currentId} /> : null}
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

const mapDispatchToProps = { fetchTasks };

export default connect(mapStateToProps, mapDispatchToProps)(CardTitle);