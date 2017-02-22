import React from 'react'
import { shallow } from 'enzyme'
import App from './App';
import configureStore from '../store'

import {
  sampleTweets,
  tweetsLoaded,
} from '../reducers/test-states'

it( 'gets tweets from state', () => {
  const store = configureStore( tweetsLoaded( {} ) )
  expect(
    shallow( <App store={ store } /> )
    .find( 'App' )
    .prop( 'tweets' )
  ).toEqual( sampleTweets )
} )
