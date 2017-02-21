import reducer, {
  getLoadingFromState,
  getTweetsFromState,
} from './'
import {
  loadingTweets,
  loadingTweetsFailed,
  receivedTweets,
} from '../actions'

import sampleTweets from '../twitter/sample-timeline.json'
export { sampleTweets }
export const tweetsLoaded = initialState =>
  reducer( initialState,
    receivedTweets( sampleTweets ) )


