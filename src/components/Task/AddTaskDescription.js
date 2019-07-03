import React, {Component} from 'react'
import { addTask, fetchTasks } from '../../store/actions/task'
import { connect } from 'react-redux'

import classes from '../Column/Column.module.css'

class AddTaskDescription extends Component{
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
    

    submitHandler = e => {
        e.preventDefault();
        this.props.addTask({body: this.state.body})
          .then(() => {
              console.warn("allo")
            this.setState({body: ''});
            this.props.fetchTasks();
              
            })
    }

    render() {
        return (
            <form className={classes.AddCard} onSubmit={this.submitHandler}>
                <input 
                    placeholder="Add description..." 
                    type="text" 
                    name="body" 
                    value={this.state.body}
                    onChange={this.changeInput}
                    className={classes.AddList}/>
            </form>
        )
    }
    
}

const mapDispatchToProps = { addTask, fetchTasks };

export default connect(null, mapDispatchToProps)(AddTaskDescription)