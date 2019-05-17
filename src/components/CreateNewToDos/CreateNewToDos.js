import React, { Component } from 'react';
import classes from './CreateNewToDos.module.css';

class CreateNewToDos extends Component {
  render() {
    return (
      <div className={classes.FormStyle}>
        <form >
            <input type="text" name="field1" placeholder="Type a title"/>
            <textarea name="field3" placeholder="Type a text"></textarea>
            <button className={classes.Button}>ADD NEW CARD</button>
        </form>
      </div>
    )
  }
}


export default CreateNewToDos;