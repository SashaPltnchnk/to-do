import React, { Component } from 'react'
import AddCardTitle from './AddCardTitle'
import CardTitle from './CardTitle'

import classes from './List.module.css'

class List extends Component {
    
    render() {
        // console.log(this.props.tasks)
        return (
            <>
                <div className={classes.List}>
                    <div className={classes.ListName} >{this.props.name}</div>
                    <CardTitle tasks={this.props.tasks}/>
                    <AddCardTitle listId={this.props.id}/>
                </div>
            </>
        )
    }
}

export default List;