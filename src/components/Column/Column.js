import React, { Component } from 'react'
import AddList from './AddList'
import AddCardTitle from './AddCardTitle'
import CardTitle from './CardTitle'

import classes from './Column.module.css'

class Column extends Component {
    render() {
        return (
            <>
                <div className={classes.Column}>
                    <div className={classes.ListName}>List Name</div>
                    <CardTitle />
                    <AddCardTitle />
                </div>
                <div className={classes.ColumnPure}>
                    <AddList />
                </div>
            </>
        )
    }
}

export default Column;