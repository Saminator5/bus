import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Icon } from 'native-base';
import styles from '../styles.js';
import PhonePad from './PhonePad';
const {height, width} = Dimensions.get('window');
import Modal from 'react-native-modal'

export default class SignUpName extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      isModalVisible: false,
      busNumber: ''
    }
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

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
                    <Input />
                  </Item>
                </View>
                <View>
                  <Item stackedLabel>
                    <Label>Email</Label>
                    <Input />
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
            <Button onPress={this._toggleModal} iconLeft style={[styles.grey, {alignSelf: 'center'}]}>
              <Icon name='person-add' style={{fontSize: 30}}/>
              <Text>Add Child</Text>
            </Button>
          </View>
        </Content>
        <Modal isVisible={this.state.isModalVisible} animationIn='fadeInLeft' animationOut='fadeOutRight'>
          <Content style={{backgroundColor: 'white'}}>
            <Button onPress={this._toggleModal} iconLeft style={[{alignSelf: 'flex-end', backgroundColor: 'white'}]}>
              <Icon name='trash' style={{color: 'red', fontSize: 30, marginRight:5}}/>
            </Button>
            <View style={{ flex: 1 }}>
              <Form style={[{minHeight: 300, justifyContent: 'space-around'}]}>
                <View>
                  <Item stackedLabel>
                    <Label>Name</Label>
                    <Input />
                  </Item>
                </View>
                <View>
                  <Item stackedLabel>
                    <Label>Name of School</Label>
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
            </View>
            <Button onPress={this._toggleModal} iconLeft style={[styles.grey, {alignSelf: 'center'}]}>
              <Icon name='done-all' />
              <Text>Submit</Text>
            </Button>
          </Content>
        </Modal>
        <Button full warning>
          <Text style={{fontSize: 20}}>Finish</Text>
        </Button>
      </Container>
    );
  }
}
