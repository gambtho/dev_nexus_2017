import React from 'react'

const Tweet = ( {
  text,
  favorite_count,
  retweet_count,
} ) => (
  <div className="tweet">
    <div className="context">
    </div>
    <div className="content">
      <div className="stream-item-header">
        { /* link to user */ }
        <a className="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/dan_abramov">
          { /* avatar */ }
          <img className="avatar js-action-profile-avatar"
            src="https://pbs.twimg.com/profile_images/826786122638426114/PR4tsq-i_normal.jpg" alt=""/>

          { /* name */ }
          <strong className="fullname js-action-profile-name show-popup-with-id">Dan Abramov</strong>
          { ' ' }
          { /* username */ }
          <span>&rlm;</span><span className="username js-action-profile-name" data-aria-label-part=""><s>@</s><b>dan_abramov</b></span>
          { ' ' }
        </a>
        { ' ' }
        <small className="time">
          { ' ' }
          <a href="/dan_abramov/status/808735457785901057" className="tweet-timestamp js-permalink js-nav js-tooltip" title="10:08 AM - 13 Dec 2016"><span className="_timestamp js-short-timestamp js-relative-timestamp" data-time="1481652533" data-time-ms="1481652533000" data-long-form="true" aria-hidden="true">5h</span><span className="u-hiddenVisually" data-aria-label-part="last">5 hours ago</span></a>
        </small>
      </div>
      <div className="js-tweet-text-container">
        { /* tweet text */ }
        <p className="TweetTextSize js-tweet-text tweet-text" lang="en" data-aria-label-part="0">{ text }</p>
      </div>
      <div className="stream-item-footer">
        <div className="ProfileTweet-actionCountList u-hiddenVisually">

          <span className="ProfileTweet-action--reply u-hiddenVisually">
            <span className="ProfileTweet-actionCount" data-tweet-stat-count="6">
              <span className="ProfileTweet-actionCountForAria" data-aria-label-part="">0 replies</span>
            </span>
          </span>
          <span className="ProfileTweet-action--retweet u-hiddenVisually">
            <span className="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count="0">
              { /* retweets */ }
              <span className="ProfileTweet-actionCountForAria">{ `${ retweet_count } retweets` }</span>
            </span>
          </span>
          <span className="ProfileTweet-action--favorite u-hiddenVisually">
            <span className="ProfileTweet-actionCount" data-tweet-stat-count="16">
              { /* favorites */ }
              <span className="ProfileTweet-actionCountForAria" data-aria-label-part="">{ `${ favorite_count } likes` }</span>
            </span>
          </span>
        </div>
        <div className="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
          <div className="ProfileTweet-action ProfileTweet-action--reply">
            <button className="ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button">
              <div className="IconContainer js-tooltip" title="Reply">
                <span className="Icon Icon--reply"></span>
                <span className="u-hiddenVisually">Reply</span>
              </div>
              <div className="IconTextContainer">
                <span className="ProfileTweet-actionCount ">
                  <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true">{ }</span>
                </span>
              </div>
            </button>
          </div>
          <div className="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
            <button className="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
              <div className="IconContainer js-tooltip" title="Retweet">
                <span className="Icon Icon--retweet"></span>
                <span className="u-hiddenVisually">Retweet</span>
              </div>
              <div className="IconTextContainer">
                <span className="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
                  <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
                </span>
              </div>
              </button><button className="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
              <div className="IconContainer js-tooltip" title="Undo retweet">
                <span className="Icon Icon--retweet"></span>
                <span className="u-hiddenVisually">Retweeted</span>
              </div>
              <div className="IconTextContainer">
                <span className="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
                  <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
                </span>
              </div>
            </button>
          </div>
          <div className="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
            <button className="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button">
              <div className="IconContainer js-tooltip" title="Like">
                <div className="HeartAnimationContainer">
                  <div className="HeartAnimation"></div>
                </div>
                <span className="u-hiddenVisually">Like</span>
              </div>
              <div className="IconTextContainer">
                <span className="ProfileTweet-actionCount">
                  <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
                </span>
              </div>
              </button><button className="ProfileTweet-actionButtonUndo u-linkClean js-actionButton js-actionFavorite" type="button">
              <div className="IconContainer js-tooltip" title="Undo like">
                <div className="HeartAnimationContainer">
                  <div className="HeartAnimation"></div>
                </div>
                <span className="u-hiddenVisually">Liked</span>
              </div>
              <div className="IconTextContainer">
                <span className="ProfileTweet-actionCount">
                  <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
                </span>
              </div>
            </button>
          </div>
          <div className="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
            <div className="dropdown">
              <button className="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
                <div className="IconContainer js-tooltip" title="More">
                  <span className="Icon Icon--dots"></span>
                  <span className="u-hiddenVisually">More</span>
                </div>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-caret">
                  <div className="caret-outer"></div>
                  <div className="caret-inner"></div>
                </div>
                <ul>
                  <li className="copy-link-to-tweet js-actionCopyLinkToTweet">
                    <button type="button" className="dropdown-link">Copy link to Tweet</button>
                  </li>
                  <li className="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
                    <button type="button" className="dropdown-link">Embed Tweet</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Tweet

