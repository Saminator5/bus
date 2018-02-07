import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Icon } from 'native-base';
import styles from '../styles.js';
const {height, width} = Dimensions.get('window');
import Modal from 'react-native-modal'
import SendSMS from 'react-native-sms'
import Communications from 'react-native-communications';

export default class SignUpDriver extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      isModalVisible: false,
      busNumber: '',
      name: '',
      email: ''
    }
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

  _finish = async () => {
    console.log('user props: ', this.props);
    try {
      const response = await fetch(`https://ancient-shelf-39200.herokuapp.com/messages/send/${this.state.phoneNumber}`, {
        method: 'GET',
      });
      console.log('response: ', response)
    } catch(e){
      console.log('error: ', e)
    }
  }

  render() {
    return (
      <Container style={styles.lightBlue}>
        <Content>
          <View style={{marginTop: 50}}>
            <View style={{alignSelf: 'center', alignItems: 'center', flexDirection: 'row'}}>
              <View>
                <Thumbnail style={{width: width/2}} square source={{uri: 'https://rhsaroundthebend.com/wp-content/uploads/2017/05/school-bus.png'}} />
              </View>
            </View>
            <View>
              <Form style={[{minHeight: 300, justifyContent: 'space-around'}]}>
                <View>
                  <Item stackedLabel>
                    <Label>Name</Label>
                    <Input onChangeText={(name) => this.setState({name})} />
                  </Item>
                </View>
                <View>
                  <Item stackedLabel>
                    <Label>Email</Label>
                    <Input onChangeText={(email) => this.setState({email})} />
                  </Item>
                </View>
                <View>
                  <Item stackedLabel>
                    <Label>Phone Number</Label>
                    <Input
                      value={this.state.phoneNumber}
                      keyboardType="number-pad"
                      onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                    />
                  </Item>
                </View>
              </Form>
            </View>
          </View>
        </Content>

        <Button full warning>
          <Text onPress={this._finish} style={{fontSize: 20}}>Finish</Text>
        </Button>

      </Container>
    );
  }
}
