import React from 'react'
import Column from '../Column/Column'

import classes from './Layout.module.css'

export default function Layout() {
    console.log('AAAAAAAAAAAAAAAAAAAA')
    return (
        <main className={classes.Layout}>
            <div className={classes.BoardName}>Don't give up</div>
            <Column />
        </main>
    )
}

