import React from 'react'
import { Link } from 'react-router-dom'


import classes from './Header.module.css'


export default function Header() {
    return (
        <header className={classes.Header}>
            <Link to='/'><h2 className={classes.Logo}>Mr. Task-Manager</h2></Link>
        </header>
    )
}
