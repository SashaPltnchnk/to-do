import React from 'react'
import List from '../List/List'
import AddList from '../List/AddList'

import classes from './Board.module.css'

export default function Board(props) {
    console.log(props)
    return (
        <main className={classes.Board}>
            {/* <div className={classes.BoardName}>Don't give up</div> */}
            <div className={classes.BoardName}>Don't give up</div>
            <List />
            <List />
            <AddList />
        </main>
    )
}

