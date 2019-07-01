import React from 'react'

import classes from './Header.module.css'

export default function Header() {
    return (
        <header className={classes.Header}>
            <h2 className={classes.Logo}>Mr. Task-Manager</h2>
        </header>
    )
}
