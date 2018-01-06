import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App2 from './containers/app.js'
import styles from './styles.js'
import RootNavigation from './navigation/navigator';

export default class MyApp extends React.Component {
  render() {
    return (
      <RootNavigation />
    );
  }
}
