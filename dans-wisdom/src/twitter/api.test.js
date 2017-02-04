import nock from 'nock'
import config from '../../package.json'
import response from './sample-timeline.json'
import { loadTweets, API_URL } from './'

describe( 'twitter api', () => {
  beforeEach(() => {
    nock( API_URL )
      .get( /.*/ )
      .reply( 200, response )
  })

  it('load tweets', () => {
    return loadTweets()
      .then(
        tweets =>
        response.forEach( tweet =>
          expect( tweets ).toContainEqual(tweet )),
        e => Promise.reject( JSON.stringify( e ) ),
      )
  });


} )
