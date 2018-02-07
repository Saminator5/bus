import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import styles from '../styles.js';
import Drawer from 'react-native-drawer'

export default class SignUpName extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  closeControlPanel = () => {
  this._drawer.close()
};
openControlPanel = () => {
  this._drawer.open()
};

  render() {
    return (
      <Container style={[styles.lightBlue, {flex: 1}]}>
        <Content>
          <Drawer
      ref={(ref) => this._drawer = ref}
      content={<ControlPanel />}
      >
      <MainView />
    </Drawer>
        </Content>
      </Container>
    );
  }
}
