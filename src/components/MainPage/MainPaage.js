import React, { Component } from 'react'
// import Board from '../Layout/Layout'
import { Link } from 'react-router-dom'

class MainPaage extends Component {
    render() {
        return (
            <>
                <div>Your Boards:</div>
                <Link to='/board1'><div>My first board</div></Link>
                <div>Add New Board</div>
                {/* <Board /> */}
            </>
        )
    }
}

export default MainPaage
