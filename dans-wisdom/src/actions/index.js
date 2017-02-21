import { createAction } from 'redux-actions'
export const loadingTweets = createAction( 'LOADING_TWEETS' )
export const receivedTweets = createAction( 'RECEIVED_TWEETS' )
export const loadingTweetsFailed = createAction( 'LOADING_TWEETS_FAILED' )

import * as twitter from '../twitter'
// action creators
export const loadTweets =
  () => ( dispatch, getState ) => {
    dispatch( loadingTweets() )
    const result = twitter.loadTweets()
    return result
      .then( receivedTweets, loadingTweetsFailed )
      .then( dispatch )
  }
