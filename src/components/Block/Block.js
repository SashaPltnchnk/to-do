import React, { Component } from 'react';
import Task from './Task/Task'
import { connect } from 'react-redux'
import { fetchTasks } from '../../store/actions/task'



class Block extends Component {

  componentDidMount() {
    this.props.fetchTasks()
  }

  render() {
    let newTaskData = this.props.tasks.map(todo => {
      return <Task {...todo} key={todo.id}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Block);