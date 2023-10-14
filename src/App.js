import React from 'react'
import Main from './components/main/main';
import './App.css';

import Data from './components/list.json'

function App() {
  return (
  <React.StrictMode>
    <div className="App">
      <Main list={Data} />
    </div>
  </React.StrictMode>
  );
}

export default App;
