import React, {Component} from 'react';

import { Provider } from 'react-redux';
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createStore} from 'redux'
import {combineReducers} from 'redux'
import * as reducers from '../reducers';
import CounterApp from './counterApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
