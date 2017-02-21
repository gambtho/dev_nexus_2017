import nock from 'nock'
import config from '../../package.json'
import response from './sample-timeline.json'
import { loadTweets, API_URL } from './'

describe( 'twitter api', () => {
  nock( API_URL )

    .get( /user_timeline[.]json/ )
    .query( {
      screen_name: 'dan_abramov',
      count: 25,
    } )
    .reply( 200, response )

    .get( /user_timeline[.]json/ )
    .query( {
      screen_name: 'dan_abramov',
      count: 25,
      max_id: response[ 0 ].id,
    } ).reply( 200, response.slice( 1 ) )

  it('load tweets', () =>
    loadTweets().then(
      tweets =>
      expect( tweets ).toEqual( response ),
      e => Promise.reject( JSON.stringify( e ) ),
    )
  )

  it( 'loads older tweets', () =>
    loadTweets( response[ 0 ].id ).then(
      tweets =>
      expect( tweets ).toEqual( response.slice( 1 ) ),
      e => Promise.reject( JSON.stringify( e ) ),
    )
  )

} )

