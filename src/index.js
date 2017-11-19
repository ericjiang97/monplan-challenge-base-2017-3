import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './app/App.js'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  ,document.getElementById('root')
)
registerServiceWorker()
