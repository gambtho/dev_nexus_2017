import { createStore } from 'redux'
import reducer, {
  getLoadingFromState,
  getTweetsFromState,
} from './'
import {
  loadingTweets,
  loadingTweetsFailed,
  receivedTweets,
} from '../actions'

describe( 'reducers', () => {
  let store
  beforeEach( () => store = createStore( reducer ) )
  it( 'can be used in a store', () => {
    expect( store == null ).toEqual( false )
  } )

  describe( '.tweets', () => {
    const exampleTweets = [
      { id: 1, text: 'Tweet one' },
      { id: 2, text: 'Tweet two' },
    ]
    describe( 'loading', () => {
      const expectLoading = isLoading =>
        expect( getLoadingFromState( store.getState() ) )
          .toEqual( isLoading )

      it( 'is false initially', () =>
        expectLoading( false ) )

      context( 'after loading has started', () => {
        beforeEach( () =>
          store.dispatch( loadingTweets() )
        )
        it( 'is true', () => expectLoading( true ) )

        it( 'is false after receiving tweets', () => {
          store.dispatch( receivedTweets( exampleTweets ) )
          expectLoading( false )
        } )

        it( 'is false after failing to load', () => {
          store.dispatch( loadingTweetsFailed() )
          expectLoading( false )
        } )
      } )
    } )

    describe( 'tweet items', () => {
      const getTweets = () =>
        getTweetsFromState( store.getState() )

      it( 'is empty initially', () =>
        expect( getTweets() )
          .toEqual( [] ) )

      it( 'adds items as they are received', () => {
        store.dispatch( receivedTweets( exampleTweets ) )
        expect( getTweets() )
          .toEqual( exampleTweets )
        const another = { id: 3, text: 'test' }
        store.dispatch( receivedTweets( [ another ] ) )
        expect( getTweets() )
          .toEqual( exampleTweets.concat( another ) )
      } )
    } )
  } )
} )

