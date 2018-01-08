import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Thumbnail } from 'native-base';
import styles from '../styles.js';
import PhonePad from './PhonePad';
const {height, width} = Dimensions.get('window');

export default class SignUpName extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ''
    }
  }

  render() {
    return (
      <Container style={styles.lightBlue}>
        <Content>
          <View style={{marginTop: 50}}>
            <View style={{alignItems: 'center'}}>
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
            <Button rounded style={[styles.grey, styles.button, {alignSelf: 'center', width: 70}]}>
            <Text>Next</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

/*
<Container >
<Content contentContainerStyle={{flex: 1}}>
<Form >

</Form>

</Content>
</Container>
*/
