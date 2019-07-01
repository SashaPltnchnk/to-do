import React from 'react'
import Column from '../Column/Column'

import classes from './Layout.module.css'

export default function Layout() {
    return (
        <main className={classes.Layout}>
            <Column />
        </main>
    )
}
