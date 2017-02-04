import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Feed from './Feed'

import sampleTweets from '../twitter/sample-timeline.json'

describe( '<Feed />', () => {
  it( 'renders without exploding', () => {
    const div = document.createElement( 'div' )
    ReactDOM.render( <Feed />, div )
  } )

  it( 'shows at least 10 tweets', () => {
    const el = <Feed tweets={ sampleTweets } />
    const el$ = shallow( el )
    expect( el$.find( 'Tweet' ).length >= 10 )
      .toEqual( true )
  } )
} )

