import React from 'react';
import Feed from './Feed'
import './App.css';

const App = ( { tweets, onLoadMore } ) =>
  <div className="App">
    <Feed tweets={ tweets } />
    <button onClick={ onLoadMore }>Load More</button>
  </div>

App.propTypes = {
  tweets: React.PropTypes.array,
  onLoadMore: React.PropTypes.func,
}

export default App

