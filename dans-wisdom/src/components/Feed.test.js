import React from 'react'
import ReactDOM from 'react-dom'
import Feed from './Feed'

describe( '<Feed />', () => {
  it( 'renders without exploding', () => {
    const div = document.createElement( 'div' )
    ReactDOM.render( <Feed />, div )
  } )

  it( 'shows at least 10 tweets' )
  it( `shows @dan_abramov's tweets` )
} )
