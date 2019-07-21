import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { fetchLists } from '../../store/actions/board'

import List from '../List/List'
import AddList from '../List/AddList'

import classes from './Board.module.css'

class Board extends Component {
    // componentDidMount() {
    //     this.props.fetchLists()
    // }
    
    render() {
        // console.log(this.props)
        // debugger
        const neededBoard = this.props.boards
            .find(board => this.props.match.params.boardId === board.id)

        
        if (!neededBoard) {
            return <div>L O A D I N G  . . . </div>
        }

    
        return (
            <main className={classes.Board}>
                <div className={classes.BoardName}>{neededBoard.name}</div>
                <List {...neededBoard}/>
                {/* <AddList {...neededBoard} /> */}
            </main>
        )
    }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
    lists: state.list.lists
  }
}

// const mapDispatchToProps = { fetchLists };

export default connect(mapStateToProps)(Board)