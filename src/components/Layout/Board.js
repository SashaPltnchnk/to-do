import React, {Component} from 'react'
import { connect } from 'react-redux'
import List from '../List/List'
import AddList from '../List/AddList'

import classes from './Board.module.css'

class Board extends Component {
    render() {
        console.log(this.props)

        const neededBoard = this.props.boards
            .find(board => this.props.match.params.boardId === board.id)

        
        if (!neededBoard) {
            return <div>L O A D I N G  . . . </div>
        }

    
        return (
            <main className={classes.Board}>
                <div className={classes.BoardName}>{neededBoard.boardName}</div>
                <List />
                <AddList />
            </main>
        )
    }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
  }
}

export default connect(mapStateToProps)(Board)