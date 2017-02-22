import React from 'react';
import { shallow } from 'enzyme'
import App from './App'
import Feed from './Feed'

it('renders without crashing', () => {
  expect( shallow( <App /> ).length ).toEqual( 1 )
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

it( 'loads more when the button is clicked', () => {
  const fn = jest.fn()
  const el$ = shallow( <App onLoadMore={ fn } /> )
  el$.find( 'button' ).simulate( 'click' )
  expect( fn.mock.calls.length ).toEqual( 1 )
  el$.find( 'button' ).simulate( 'click' )
  expect( fn.mock.calls.length ).toEqual( 2 )
} )
