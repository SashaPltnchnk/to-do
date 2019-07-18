import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddBoard from '../Layout/AddBoard'

import classes from './MainPage.module.css'

import boards from '../../fake'

class MainPage extends Component {
    render() {
      const aaaa = boards.map(board => (
        // <div key={board.id}>{board.name}</div>
        <Link to={`/{board.id}`}><div className={classes.LilBoard} >{board.name}</div></Link>

      ))
        return (
            <div className={classes.MainPage}>
                <div className={classes.Header}>Your Boards:</div>
                
                <div className={classes.LilBoards}>
                  {aaaa}
                    {/* <Link to='/board1'><div className={classes.LilBoard}>My first board</div></Link> */}
                    <AddBoard />
                </div>
            </div>
        )
    }
}
 
export default MainPage
