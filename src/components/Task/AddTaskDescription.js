import React, {Component} from 'react'
import { addTaskDescription, fetchTasks } from '../../store/actions/task'
import { connect } from 'react-redux'

import classes from '../List/List.module.css'

class AddTaskDescription extends Component{
    state = {
        task: {
            body: '',
            title: ''
        }
      }

      componentDidMount() {
        this.setState(state => {
            const targetTask = this.props.tasks.find(task => task._id === this.props.id)
            const task = { title: targetTask.title, body: targetTask.body }
            return {
                ...state, 
                task
            }})
      }
    
      changeInput = (e) => {
        const {name, value} = e.target
        this.setState(state => {
            return {
                ...state,
                task: {
                    ...state.task,
                    [name]: value
                }
            }
        })
      }
    

    submitHandler = e => {
        e.preventDefault();
        this.props.addTaskDescription(this.state.task, this.props.id)
          .then(() => {   
            this.props.fetchTasks();
            })
    }

    render() {
        // console.log(this.props)
        console.log(this.state)
        return (
            <form className={classes.AddCard} onSubmit={this.submitHandler}>
                <input 
                    placeholder="Add description..." 
                    type="text" 
                    name="body" 
                    value={this.state.task.body}
                    onChange={this.changeInput}
                    className={classes.AddList}/>
            </form>
        )
    }
    
}

const mapStateToProps = state => {
    return {
      tasks: state.tasks,
    }
  } 

const mapDispatchToProps = { addTaskDescription, fetchTasks };

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskDescription)