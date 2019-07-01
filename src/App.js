import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
// import Modal from './components/Task/TaskInfo'
import Modal from './components/Layout/Modal'

function App() {
  return (
    <>
      <Header />
      <Layout />
      {/* <Modal/> */}
    </>
  );
}

export default App;
