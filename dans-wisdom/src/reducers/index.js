import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
  loadingTweets,
  loadingTweetsFailed,
  receivedTweets,
} from '../actions'

export const getLoadingFromState = state =>
  state.isLoading

export const getTweetsFromState = state =>
  state.ids.map( getTweet( state ) )

const getID = tweet => tweet.id
const getTweet = state => id => state.byId[ id ]
//
// reducers

// tweet IDs
const ids = handleActions( {
  [ receivedTweets ]: ( state, { payload } ) =>
    state.concat( payload.map( getID ) ),
}, [] )

// tweets in a map, by ID
const byId = handleActions( {
  [ receivedTweets ]: ( state, { payload } ) =>
  payload.reduce( ( map, tweet ) =>
    Object.assign( map, {
      [ getID( tweet ) ]: tweet,
    } ), state )
}, {} )

// tweet loading state
const isLoading = handleActions( {
  [ loadingTweets ]: () => true,
  [ loadingTweetsFailed ]: () => false,
  [ receivedTweets ]: () => false,
}, false )

export default combineReducers( {
  ids,
  byId,
  isLoading,
} )

