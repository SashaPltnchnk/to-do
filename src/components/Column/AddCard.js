import React, {Component} from 'react'
import { addTask, fetchTasks } from '../../store/actions/task'
import { connect } from 'react-redux'

import classes from './Column.module.css'

class AddCard extends Component{
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
        this.props.addTask({title: this.state.title})
          .then(() => {
              console.warn("allo")
            this.setState({title: ''});
            this.props.fetchTasks();
              
            })
    }

    render() {
        return (
            <form className={classes.AddCard} onSubmit={this.submitHandler}>
                <input 
                    placeholder="Add Card.." 
                    type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.changeInput}
                    className={classes.AddList}/>
            </form>
        )
    }
    
}

const mapDispatchToProps = { addTask, fetchTasks };

export default connect(null, mapDispatchToProps)(AddCard)
