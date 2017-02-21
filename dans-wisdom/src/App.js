import React, { Component } from 'react';

import './App.css';
import Feed from './components/Feed'

const App = ( { tweets } ) =>
  <div className="App">
    <Feed tweets={ tweets } />
  </div>

export default App;
