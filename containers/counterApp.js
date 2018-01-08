'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import SignUp from '../components/SignUp';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
import styles from '../styles.js'

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      // <Counter
      //   counter={state.count}
      //   {...actions} />
      <SignUp />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);
