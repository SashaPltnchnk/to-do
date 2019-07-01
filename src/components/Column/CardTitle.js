import React, { Component } from 'react';
// import Task from './Task/Task'
import { connect } from 'react-redux'
import { fetchTasks } from '../../store/actions/task'

import classes from './Column.module.css'



class CardTitle extends Component {

  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    let newTaskData = this.props.tasks.map(todo => {
      return (
        <div 
            {...todo} 
            className={classes.CardTitle}
            key={todo.id}>
                {todo.title} 
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