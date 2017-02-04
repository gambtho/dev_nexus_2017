import React from 'react'
import Tweet from './Tweet'

const Feed = (props) => {

  return <div> {props.tweets.map(tweet =>
    <Tweet {...tweet} />
  ) }
    </div>
}

Feed.defaultProps = {
  tweets: [],
}

export default Feed

