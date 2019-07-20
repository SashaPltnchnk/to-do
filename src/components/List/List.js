import React, { Component } from 'react'
// import AddCardTitle from './AddCardTitle'
// import CardTitle from './CardTitle'

import classes from './List.module.css'

class List extends Component {
    render() {
        console.log(this.props.lists)
        // const lists = this.props.lists.map(list => (
        //     <div>{list.listName}</div>
        // ))
        return (
            <>
                <div className={classes.List}>
                    {/* {lists} */}
                    <div className={classes.ListName}>List Name</div>
                    {/* <CardTitle />
                    <AddCardTitle /> */}
                </div>
            </>
        )
    }
}

export default List;