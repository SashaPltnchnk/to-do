import React, { Component } from 'react'

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
        // request to send listName
        console.log("cleaning")
        this.setState({listName: ''})        
    }

    render() {
        // console.log(this.state.listName)
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
                <div>{this.state.listName}</div>
            </>
        )
    }
}

export default AddList