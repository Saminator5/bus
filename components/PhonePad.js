import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import styles from '../styles.js';



export default class PhonePad extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Button light><Text>1</Text></Button>
            <Button light><Text>2</Text></Button>
            <Button light><Text>3</Text></Button>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button light><Text>4</Text></Button>
            <Button light><Text>5</Text></Button>
            <Button light><Text>6</Text></Button>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button light><Text>7</Text></Button>
            <Button light><Text>8</Text></Button>
            <Button light><Text>9</Text></Button>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Button light><Text>0</Text></Button>
          </View>
        </View>
      </View>
    );
  }
}
