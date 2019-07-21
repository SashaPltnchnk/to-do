import React, {Component} from 'react'
// import { addTaskTitle, fetchTasks } from '../../store/actions/task'
import { addTaskTitle, fetchBoards} from '../../store/actions/board'
import { connect } from 'react-redux'

import classes from './List.module.css'

class AddCardTitle extends Component{
    state = {
        // body: '',
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
        this.props.addTaskTitle({title: this.state.title}, this.props.listId)
          .then(() => {
              console.warn("allo")
            this.setState({title: ''});
            this.props.fetchBoards();
              
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

const mapDispatchToProps = { addTaskTitle, fetchBoards };

export default connect(null, mapDispatchToProps)(AddCardTitle)
