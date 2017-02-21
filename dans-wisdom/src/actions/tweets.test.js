import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import {
  loadTweets,
  loadingTweets,
  loadingTweetsFailed,
  receivedTweets,
} from './'
import sampleTweets from '../twitter/sample-timeline.json'

const middlewares = [ thunk ]
const mockStore = configureMockStore( middlewares )
describe( 'loadTweets', () => {
  afterEach( () => nock.cleanAll() )

  context( 'on success', () => {
    beforeEach( () =>
      nock( /.*/ ).get( /.*/ )
      .reply( 200, sampleTweets ) )

    it( 'dispatches the proper actions', () => {
      const store = mockStore()
      const expectedActions = [
        loadingTweets(),
        receivedTweets( sampleTweets ),
      ]

      return store.dispatch( loadTweets() )
        .then( () => {
          expect( store.getActions() )
            .toEqual( expectedActions )
        } )
    } )
  } )

  context( 'on failure', () => {
    beforeEach( () =>
      nock( /.*/ ).get( /.*/ )
      .reply( 401 ) )

    it( 'dispatches the proper actions', () => {
      const store = mockStore()
      const expectedActions = [
        loadingTweets(),
        loadingTweetsFailed( new Error( 'Unauthorized' ) ),
      ]

      return store.dispatch( loadTweets() )
        .then( () => {
          expect( store.getActions() )
            .toEqual( expectedActions )
        } )
    } )
  } )

} )

