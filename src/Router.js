import React from 'react'
import Board from './components/Layout/Board'
import MainPage from './components/MainPage/MainPage'
import { Route } from 'react-router-dom'


export default function router() {
    return ( 
        <>
            <Route exact path='/' component={MainPage} />
            {/* <Route exact path={`/{board.id}`} component={Board} /> */}
            <Route 
                exact path={`/{board.id}`} 
                render={props => <Board {...props}  />}
            />
        </>
     );
}