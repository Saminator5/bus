import React from 'react';
import { Image, View, Alert, Dimensions } from 'react-native';
import { Container, Content, Button, Text, Item, Input, Form, Label} from 'native-base'; // 2.3.5
import styles from '../styles.js'

const {height, width} = Dimensions.get('window');
const resizeMode = 'stretch';

export default class SignUp extends React.Component {

  parentPress = () => {

  }

  componentWillMount = () => {
    console.log('this.props: ', this.props)
  }
  render() {

    return (
      <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
        <View style={{ flex: 1,   position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {/* <Image style={{flex: 1, resizeMode, justifyContent: 'center'}}
              source={{uri: 'https://i.pinimg.com/736x/00/ec/49/00ec491f653b2b0e1df18f980a45049d--smiley-face-tattoos-owl-tattoos.jpg'}}
            /> */}
          </View>
          <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <View>
                      <Button bordered className={styles.button}>
                        <Text>Sign Up - Parent</Text>
                      </Button>
                    </View>
                    <View style={{marginTop: 20}}>
                      <Button bordered success className={styles.button}>
                        <Text>Sign Up - Driver</Text>
                      </Button>
                    </View>
            </View>
          </View>
          )
        }
      }
