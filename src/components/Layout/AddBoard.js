import React, { Component } from 'react'

import classes from '../MainPage/MainPage.module.css'
import styles from '../List/List.module.css'


class AddBoard extends Component{
    state = {
        boardName: ''
    }

    changeHandler = e => {
        this.setState({boardName: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        // request to send listName
        console.log("cleaning")
        this.setState({boardName: ''})        
    }

    render() {
        // console.log(this.state.listName)
        return (
            <>
                <div  className={classes.LilBoard}>
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            className={styles.AddList} 
                            placeholder='Add Board..' 
                            value={this.state.boardName}
                            onChange={this.changeHandler}
                            />
                    </form>
                </div>
                <div>{this.state.boardName}</div>
            </>
        )
    }
}

export default AddBoard