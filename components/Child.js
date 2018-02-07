import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import styles from '../styles.js';

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
      <Container style={[styles.lightBlue, {flex: 1}]}>
        <Content >
          <View style={{justifyContent: 'center'}}>
            <Form style={[{minHeight: 300, justifyContent: 'space-around'}]}>
                <Item stackedLabel>
                  <Label>Name</Label>
                  <Input />
                </Item>
              {/*NOTE add in photo later!  */}
              {/* <View>
                <Item stackedLabel>
                  <Label>Photo</Label>
                </Item>
              </View> */}
                <Item stackedLabel>
                  <Label>School Name</Label>
                  <Input />
                </Item>
                <Item stackedLabel>
                  <Label>Bus Number</Label>
                  <Input
                    value={this.state.busNumber}
                    keyboardType="number-pad"
                    onChangeText={(busNumber) => this.setState({busNumber})}
                  />
                </Item>
            </Form>
          </View>

          <Button rounded style={[styles.grey, {alignSelf: 'center'}]}>
            <Text>Finish</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
