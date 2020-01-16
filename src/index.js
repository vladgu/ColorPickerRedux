import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

import reducer from './reducers'

import App from './containers/App';

import './styles/_main.scss'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose


const store = createStore(reducer, composeEnhancers())

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
