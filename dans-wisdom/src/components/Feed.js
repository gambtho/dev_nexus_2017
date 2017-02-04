import React from 'react'

const Tweet = () => ( <span/> )

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

