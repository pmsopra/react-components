import React from 'react';
import Tasks from './components/Tasks';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tasks />
    </div>
  );
}

export default App;
