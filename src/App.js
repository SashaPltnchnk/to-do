import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './components/Header/Header'
// import MainPage from './components/MainPage/MainPaage'
// import Layout from './components/Layout/Layout'
// import Modal from './components/Task/TaskInfo'
// import Modal from './components/Layout/Modal'

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <MainPage /> */}

      <Router />
      {/* <Layout /> */}
      {/* <Modal/> */}
    </BrowserRouter>
  );
}

export default App;
