import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList, fetchBoards } from '../../store/actions/board'

import classes from './List.module.css'


class AddList extends Component{
    state = {
        listName: ''
    }

    changeHandler = e => {
        this.setState({listName: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addList({listName: this.state.listName}, this.props.id)
            .then(() => {
                this.props.fetchBoards()
                this.setState({listName: ''})  
            })
        // console.log("cleaning")
              
    }

    render() {
        // console.log(this.props.id)
        return (
            <>
                <div className={classes.ListPure}>
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            className={classes.AddList} 
                            placeholder='Add List..' 
                            value={this.state.listName}
                            onChange={this.changeHandler}
                            />
                    </form>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = { addList, fetchBoards };

export default connect(null, mapDispatchToProps)(AddList)