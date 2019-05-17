import React, { Component } from 'react';
import Task from './Task/Task';
import axios from '../../axios-todos';


class Block extends Component {
    state = {
        showTask: true
    }

    deleteTask = () => {
        this.setState({ showTask: false })
    }

    componentDidMount() {
        axios.get('tasks.json')
            .then( res => {
                console.log(res);
            })
            .catch( err => {
                console.error(err);
            })
    }

  render() {
    return (
      <div>
        {
            this.state.showTask ? <Task delete={this.deleteTask} /> : null
        }
      </div>
    )
  }
}

export default Block;