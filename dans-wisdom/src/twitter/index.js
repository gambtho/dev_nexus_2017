import fetch from 'isomorphic-fetch'

import config from '../../package.json'
export const API_URL = config.twitter_url

// max_id is optional
//   comes from: `tweet.id`
export const loadTweets =
  ( max_id, screen_name = 'dan_abramov' ) =>
  fetch( [
    `${ API_URL }/1.1/statuses/user_timeline.json?`,
    max_id ? `max_id=${ max_id }` : '',
    `screen_name=${ screen_name }`,
    'count=25',
  ].join( '&' ) )
    .then( r => {
      if ( !r.ok ) {
        throw Error( r.statusText )
      }
      return r
    } )
    .then( r => r.json() )

