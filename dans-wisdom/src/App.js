import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import Feed from './components/Feed'
import {
  getTweetsFromState,
} from './reducers'

export const App = ( { tweets } ) =>
  <div className="App">
    <Feed tweets={ tweets } />
  </div>


const mapStateToProps = ( state ) => ( {
  tweets: getTweetsFromState( state ),
} )
export default connect(
  mapStateToProps,
)( App )
