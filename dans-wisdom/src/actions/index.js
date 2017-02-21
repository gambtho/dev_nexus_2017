import { createAction } from 'redux-actions'
export const loadingTweets = createAction( 'LOADING_TWEETS' )
export const receivedTweets = createAction( 'RECEIVED_TWEETS' )
export const loadingTweetsFailed = createAction( 'LOADING_TWEETS_FAILED' )
