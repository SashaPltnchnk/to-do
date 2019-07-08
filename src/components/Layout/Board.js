import React from 'react'
import Column from '../Column/Column'

import classes from './Board.module.css'

export default function Layout() {
    return (
        <main className={classes.Board}>
            <div className={classes.BoardName}>Don't give up</div>
            <Column />
        </main>
    )
}

