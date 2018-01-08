import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import styles from '../styles.js';
import PhonePad from './PhonePad';

export default class SignUpName extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      busNumber: ''
    }
  }

  render() {
    return (
      <Container>
        <Content style={[styles.lightBlue, {justifyContent: 'center'}]}>
          <Form style={[{minHeight: 300, justifyContent: 'space-around'}]}>
            <View>
              <Item stackedLabel>
                <Label>Name</Label>
                <Input />
              </Item>
            </View>
            <View>
              <Item stackedLabel>
                <Label>Photo</Label>
              </Item>
            </View>
            <View>
              <Item stackedLabel>
                <Label>Number to enter</Label>
                <Input
                  value={this.state.phoneNumber}
                  keyboardType="number-pad"
                  onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                />
              </Item>
            </View>
            <View>
              <Item stackedLabel>
                <Label>School Name</Label>
                <Input />
              </Item>
            </View>
            <View>
              <Item stackedLabel>
                <Label>Bus Number</Label>
                <Input
                  value={this.state.busNumber}
                  keyboardType="number-pad"
                  onChangeText={(busNumber) => this.setState({busNumber})}
                />
              </Item>
            </View>
          </Form>
          <Button rounded style={[styles.grey, {alignSelf: 'center'}]}>
            <Text>Finish</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
