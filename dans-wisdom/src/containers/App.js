import { connect } from 'react-redux'
import App from '../components/App'

import {
  getTweetsFromState,
} from '../reducers'

import {
  loadTweets,
} from '../actions'

const mapStateToProps = ( state ) => ( {
  tweets: getTweetsFromState( state ),
} )
const mapDispatchToProps = dispatch => ( {
  onLoadMore: () => dispatch( loadTweets() ),
} )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)( App )
