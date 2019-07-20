import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBoard, fetchBoards } from '../../store/actions/board'

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
        this.props.addBoard({boardName: this.state.boardName})
            .then(() => {
                this.props.fetchBoards()
                this.setState({boardName: ''}) 
            })       
    }

    render() {
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
            </>
        )
    }
}

const mapDispatchToProps = { addBoard, fetchBoards };

export default connect(null, mapDispatchToProps)(AddBoard)