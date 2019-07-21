import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './components/Header/Header'
import { connect } from 'react-redux'
import { fetchBoards } from './store/actions/board'

import './App.css'


class App extends Component{
  componentDidMount() {
    console.log('aaa')
    this.props.fetchBoards();
  }
  
  render() {
    return (
      <BrowserRouter>
        <Header />
  
        <Router />
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = { fetchBoards };

export default connect(null, mapDispatchToProps)(App);
