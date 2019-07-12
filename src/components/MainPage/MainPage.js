import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddBoard from '../Layout/AddBoard'

import classes from './MainPage.module.css'

class MainPage extends Component {
    render() {
        return (
            <div className={classes.MainPage}>
                <div className={classes.Header}>Your Boards:</div>
                <div className={classes.LilBoards}>
                    <Link to='/board1'><div className={classes.LilBoard}>My first board</div></Link>
                    <AddBoard />
                </div>
            </div>
        )
    }
}
 
export default MainPage
