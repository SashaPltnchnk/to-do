import React, { Component } from 'react'
import AddCardTitle from './AddCardTitle'
import CardTitle from './CardTitle'

import classes from './List.module.css'

class List extends Component {
    render() {
        return (
            <>
                <div className={classes.List}>
                    <div className={classes.ListName}>List Name</div>
                    <CardTitle />
                    <AddCardTitle />
                </div>
            </>
        )
    }
}

export default List;