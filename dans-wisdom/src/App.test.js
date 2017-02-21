import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'

import { App } from './App';
import Feed from './components/Feed'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it( 'shows a feed', () => {
  expect(
    shallow( <App /> )
      .find( Feed )
      .length
  ).toEqual( 1 )

  const tweet = { text: 'Hello, dev nexus' }
  expect(
    shallow( <App tweets={ [ tweet ] } /> )
      .find( Feed )
      .prop( 'tweets' )
  ).toEqual( [ tweet ] )
} )

import ConnectedApp from './App';
import configureStore from './store'
import {
  sampleTweets,
  tweetsLoaded,
} from './reducers/test-states'
describe( 'connected App', () => {
  it( 'gets tweets from state', () => {
    const store = configureStore( tweetsLoaded( {} ) )
    expect(
      shallow( <ConnectedApp store={ store } /> )
        .find( App )
        .prop( 'tweets' )
    ).toEqual( sampleTweets )
  } )
} )
