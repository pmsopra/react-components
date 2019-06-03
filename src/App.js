import React from 'react';
import Tasks from './components/Tasks';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filters />
      <Tasks />
    </div>
  );
}

export default App;
