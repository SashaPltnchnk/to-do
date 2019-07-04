import React, { Component } from 'react'
import Board from '../Layout/Layout'

class MainPaage extends Component {
    render() {
        return (
            <>
                <div>Your Boards:</div>
                <div onClick={this.openBoard}>My first board</div>
                <div>Add New Board</div>
                {/* <Board /> */}
            </>
        )
    }
}

export default MainPaage
