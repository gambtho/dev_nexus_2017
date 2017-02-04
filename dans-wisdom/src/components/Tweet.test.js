import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Tweet from './Tweet'

describe( '<Tweet />', () => {

  it( 'renders without exploding', () => {
    const div = document.createElement( 'div' )
    ReactDOM.render( <Tweet />, div )
  } )

  it( `shows @dan_abramov's tweets`, () => {
		const el = renderer.create(<Tweet />)
		expect(el.toJSON()).toMatchSnapshot()
  } )
} )
