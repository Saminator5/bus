import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput, ActivityIndicator, ContentLoader } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import styles from '../styles.js';
import CodeInput from 'react-native-confirmation-code-input';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import { Instagram } from 'react-content-loader'

export default class ConfirmCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirming: false
    }
  }

  static navigationOptions = {
    header: null
  };


  render() {
    return (
      <View style={[styles.lightBlue, styles.container, {justifyContent: 'center'}]}>
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <View style={{marginBottom: 20}}>
            {this.state.confirming ?
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>
                 Enter your code below.
               </Text>
              </View> :
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>
                Verifying...
              </Text>
            </View>
          }
          </View>
          {this.state.confirming
            ?
            <View style={{alignSelf:'center'}}>
              <Instagram />
            </View>
            : <View>
               <CodeInput
                 ref="codeInputRef1"
                 secureTextEntry
                 keyboardType="numeric"
                 compareWithCode='12345'
                 activeColor='white'
                 inactiveColor='black'
                 autoFocus={false}
                 ignoreCase={true}
                 inputPosition='center'
                 size={50}
                 codeLength={5}
                 onFulfill={() => this.setState({confirming: true})}
                 containerStyle={{ marginTop: 30 }}
                 codeInputStyle={{ borderWidth: 1.5 }}
               />
          </View>
        }
        </View>
        <View style={{flex: 1}}>
        </View>
      </View>
    );
  }
}
