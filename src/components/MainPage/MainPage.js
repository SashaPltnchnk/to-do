import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddBoard from '../Layout/AddBoard'
import { connect } from 'react-redux'
import { fetchBoards } from '../../store/actions/board'

import classes from './MainPage.module.css'


class MainPage extends Component {
  // componentDidMount() {
  //   this.props.fetchBoards();
  // }
  
    render() {

      const boards = this.props.boards.map(board => (
        <div key={board.id}>
          <Link to={`/${board.id}`}><div className={classes.LilBoard} >{board.name}</div></Link>
        </div>
        
      ))
        return (
            <div className={classes.MainPage}>
                <div className={classes.Header}>Your Boards:</div>
                <div className={classes.LilBoards}>
                  {boards}
                  <AddBoard />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    boards: state.board.boards,
  }
}

const mapDispatchToProps = { fetchBoards };
 
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
