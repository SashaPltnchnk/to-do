import React from 'react'
import Board from './components/Layout/Layout'
import MainPage from './components/MainPage/MainPaage'
import { Route } from 'react-router-dom'


export default function router() {
    return ( 
        <>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/board1' component={Board} />
        </>
     );
}