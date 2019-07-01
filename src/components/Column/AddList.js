import React from 'react'

import classes from './Column.module.css'

export default function AddList() {
    return (
        <form>
            <input 
                className={classes.AddList} 
                placeholder='Add List..' />
        </form>
    )
}
