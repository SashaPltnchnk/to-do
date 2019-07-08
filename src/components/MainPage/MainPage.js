import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainPage extends Component {
    render() {
        return (
            <>
                <div>Your Boards:</div>
                <Link to='/board1'><div>My first board</div></Link>
                <div>Add New Board</div>
            </>
        )
    }
}

export default MainPage
