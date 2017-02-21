import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';
import configureStore from './store'

import './index.css';

const store = configureStore( )
const render =
  ( el = document.getElementById('root') ) =>
  ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>, el )

export default render
if ( process.env.NODE_ENV !== 'test' ) {
  render()
}
