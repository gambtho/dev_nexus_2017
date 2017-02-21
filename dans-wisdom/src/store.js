import { createStore } from 'redux'
import reducers from './reducers'

export const configureStore = initialState =>
  createStore( reducers, initialState )

export default configureStore
