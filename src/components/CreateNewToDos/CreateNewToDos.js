import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTask, fetchTasks } from '../../store/actions/task'

import classes from './CreateNewToDos.module.css';



class CreateNewToDos extends Component {
  state = {
    body: '',
    title: ''
  }

  changeInput = (e) => {
    const {name, value} = e.target
    this.setState(state => {
        return {
            ...state,
            [name]: value
        }
    })
  }

  addNewTask = () => {
    console.log("addnewtask")
    let data = this.state;
    this.props.addTask(data)
      .then(() => {this.props.fetchTasks()})
  }

  // submitHandler = e => {
  //   console.log("submit")
  //   e.preventDefault();
  //   this.addNewTask();
  // }

  render() {
    return (
      <div className={classes.FormStyle}>
        {/* <form onSubmit={this.submitHandler}> */}
          <input 
            type="text" 
            name="title" 
            placeholder="Type a title"
            onChange={this.changeInput} />
          <textarea 
            name="body" 
            placeholder="Type a text"
            onChange={this.changeInput}></textarea>
          <button 
            className={classes.Button}
            onClick={this.addNewTask}
            >ADD NEW CARD</button>
        {/* </form> */}
      </div>
    )
  }
}

const mapDispatchToProps = { addTask, fetchTasks };

export default connect(null, mapDispatchToProps)(CreateNewToDos);