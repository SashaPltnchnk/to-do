import React from 'react'

import classes from './Column.module.css'

export default function AddCard() {
    return (
        <form className={classes.AddCard}>
            <input placeholder="Add Card.." className={classes.AddList}/>
        </form>
    )
}
