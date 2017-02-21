import React from 'react'
import Tweet from './Tweet'

const Feed = ( { tweets } ) =>
  <div>
    { tweets.map( tweet =>
      <Tweet { ...tweet } key={ tweet.id } />
    ) }
  </div>

Feed.defaultProps = {
  tweets: [],
}

export default Feed

