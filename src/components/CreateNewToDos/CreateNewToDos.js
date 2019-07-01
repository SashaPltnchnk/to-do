import React, { Component } from 'react';


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

  // addNewTask = () => {
  //   let data = this.state;
  //   axios.post('/todos/', data)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  // }

  submitHandler = (e) => {
    e.preventDefault();
    this.addNewTask();
  }

  render() {
    return (
      <div className={classes.FormStyle}>
        <form onSubmit={this.submitHandler}>
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
        </form>
      </div>
    )
  }
}


export default CreateNewToDos;