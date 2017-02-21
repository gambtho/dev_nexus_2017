import { createAction } from 'redux-actions'
export const loadingTweets = createAction( 'LOADING_TWEETS' )
export const receivedTweets = createAction( 'RECEIVED_TWEETS' )
export const loadingTweetsFailed = createAction( 'LOADING_TWEETS_FAILED' )

import * as twitter from '../twitter'
import { getNextPage } from '../reducers'
// action creators
export const loadTweets =
  () => ( dispatch, getState ) => {
    dispatch( loadingTweets() )
    const max = getNextPage( getState() )
    const result = twitter.loadTweets( max )
    return result
      .then( receivedTweets, loadingTweetsFailed )
      .then( dispatch )
  }
