import React from 'react';
import './App.css';
import Block from './components/Block/Block';
import CreateNewToDos from './components/CreateNewToDos/CreateNewToDos';

function App() {
  return (
    <div className="App">
      <CreateNewToDos />
      <Block />
    </div>
  );
}

export default App;
