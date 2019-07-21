import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBoard, fetchBoards } from '../../store/actions/board'

import classes from '../MainPage/MainPage.module.css'
import styles from '../List/List.module.css'


class AddBoard extends Component{
    state = {
        name: ''
    }

    changeHandler = e => {
        this.setState({name: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addBoard({name: this.state.name})
            .then(() => {
                this.props.fetchBoards()
                this.setState({name: ''}) 
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
                            value={this.state.name}
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