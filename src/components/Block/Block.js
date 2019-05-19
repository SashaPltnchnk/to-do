import React, { Component } from 'react';
import Task from './Task/Task';
import axios from '../../axios-todos';


class Block extends Component {
    state = {
        showTask: true,
        taskData: []
    }

    deleteTask = () => {
        this.setState({ showTask: false })
    }

    componentDidMount() {
        axios.get('/todos/')
            .then( res => {
                this.setState({ taskData: res.data })
            })
            .catch( err => {
                console.error(err);
            })
    }

  render() {
    let newTaskData = this.state.taskData.map(todo => {
      return <Task {...todo} key={todo.id}/>
    })

    return (
      <div>
        {newTaskData}
      </div>
    )
  }
}

export default Block;