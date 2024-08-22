
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Movies from './components/Movies';

export class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <Movies />
       
       
      </div>
    )
  }
}

export default App;



