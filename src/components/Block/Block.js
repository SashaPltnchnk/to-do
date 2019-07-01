import React, { Component } from 'react';
import Task from './Task/Task';
import axios from '../../axios-todos';
import { connect } from 'react-redux'
import { fetchTasks } from '../../store/actions/task'



class Block extends Component {
  // state = {
  //   taskData: []
  // }

  componentDidMount() {
    this.props.fetchTasks()
    // axios.get('/todos/')
    //   .then( res => {
    //       this.setState({ taskData: res.data })
    //   })
    //   .catch( err => {
    //       console.error(err);
    //   })
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