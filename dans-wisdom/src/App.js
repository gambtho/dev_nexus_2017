import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import Feed from './components/Feed'
import {
  getTweetsFromState,
} from './reducers'

import {
  loadTweets,
} from './actions'

export const App = ( { tweets, onLoadMore } ) =>
  <div className="App">
    <Feed tweets={ tweets } />
    <button onClick={ onLoadMore }>Load More</button>
  </div>

App.propTypes = {
  tweets: React.PropTypes.array,
  onLoadMore: React.PropTypes.func,
}

const mapStateToProps = ( state ) => ( {
  tweets: getTweetsFromState( state ),
} )
const mapDispatchToProps = dispatch => ( {
  onLoadMore: () => dispatch( loadTweets() ),
} )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( App )
