import React, { Component } from 'react'
// import AddCardTitle from './AddCardTitle'
// import CardTitle from './CardTitle'

import classes from './List.module.css'

class List extends Component {
    render() {
        console.log(this.props.lists)
        const lists = this.props.lists.map(list => (
            <div className={classes.ListName} key={list.id}>{list.name}</div>
        ))
        return (
            <>
                <div className={classes.List}>
                    {lists}
                    {/* <CardTitle />
                    <AddCardTitle /> */}
                </div>
            </>
        )
    }
}

export default List;