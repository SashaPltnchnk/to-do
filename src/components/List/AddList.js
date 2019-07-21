import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList, fetchBoards } from '../../store/actions/board'

import classes from './List.module.css'


class AddList extends Component{
    state = {
        name: ''
    }

    changeHandler = e => {
        this.setState({name: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addList({name: this.state.name}, this.props.id)
            .then(() => {
                this.props.fetchBoards()
                this.setState({name: ''})  
            })             
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
                            value={this.state.name}
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