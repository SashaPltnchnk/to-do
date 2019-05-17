import React, { Component } from 'react';
import Task from './Task/Task';


class Block extends Component {
  render() {
    return (
      <div>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </div>
    )
  }
}

export default Block;